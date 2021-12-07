import { Link, useMatch } from "react-router-dom";
import { MdDashboard, MdAddCircle, MdListAlt } from "react-icons/md"


import './index.css';
const NavBar = ()=>{
  const navStylesClass = {
    dashboard: useMatch({ path: "/", end: true }) ? "active" : "",
    list: useMatch({ path: "/list", end: true }) ? "active" : "",
    new: useMatch({ path: "/new", end: true }) ? "active" : ""
  }
  const menu =
    (<ul>
      <li className={navStylesClass.dashboard}><Link to="/" style={{fontSize:"0.8rem"}}><MdDashboard size="1.5rem"/> <span style={{marginTop:"0.4rem"}}>Dashboard</span></Link></li>
      <li className={navStylesClass.list}><Link to="/list" style={{ fontSize: "0.8rem" }}><MdListAlt size="1.5rem"/><span style={{marginTop:"0.4rem"}}>List</span></Link></li>
      <li className={navStylesClass.new}><Link to="/new" style={{ fontSize: "0.8rem" }}><MdAddCircle size="1.5rem"/><span style={{marginTop:"0.4rem"}}>Add SWOT</span></Link></li>
    </ul>);

  return (
    <nav>
     {menu}
    </nav>
  );
}

export default NavBar;
