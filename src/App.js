
//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
//Authentication Guards
import RequireAuth from './components/UI/RequireAuth';
//Pages
import Splash from "./components/Splash";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import SwotList from "./components/SwotList";
import SwotAdd from "./components/SwotAdd";
import { useSelector } from "react-redux";
import { initiatedApp } from './store/reducers/app/actions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Private = ({ children }) => <RequireAuth redirectTo="/login">{children}</RequireAuth>

function App() {
  const { appInitiated, loading} = useSelector(({app})=>app);
  const dispatch = useDispatch();
  useEffect(()=>{
    initiatedApp(dispatch);
  }, []);
  return (
      <BrowserRouter>
        <div className="App">
          { (appInitiated)? (<Routes>
            <Route path="/login"  element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Private><Dashboard /></Private>}/>
            <Route path="/new" element={<Private><SwotAdd /></Private>} />
            <Route path="/list" element={<Private><SwotList /></Private>} />
          </Routes>): (<Splash />)
          }
        </div>
      </BrowserRouter>
  );
}

export default App;
