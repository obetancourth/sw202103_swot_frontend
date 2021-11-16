//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Splash from "./components/Splash";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/"       element={<Splash/>} />
          <Route path="/login"  element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
