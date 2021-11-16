import { Link } from "react-router-dom";

const NavBar = ()=>{
  return (
    <nav>
      <ul>
        <li><Link to="/">Splash</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signin">Signin</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
