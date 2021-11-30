
//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
//Authentication Guards
import RequireAuth from './components/UI/RequireAuth';
//Pages
import Splash from "./components/Splash";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/"       element={<Splash/>} />
            <Route path="/login"  element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
