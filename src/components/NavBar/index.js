import { Link } from "react-router-dom";
import { MdHome, MdLogin } from "react-icons/md"
import './index.css';
const NavBar = ()=>{
  return (
    <nav>
      <ul>
        <li><Link to="/"><MdHome/> Splash</Link></li>
        <li><Link to="/login"><MdLogin /> Login</Link></li>
        <li><Link to="/signin">Signin</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
