//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
//Pages
import Splash from "./components/Splash";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/"       element={<Splash/>} />
            <Route path="/login"  element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
