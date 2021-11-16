import {Fragment} from 'react';

import NavBar from '../NavBar';
import './index.css';

const Page = ({children, className, showHeader, showNavBar, title})=>{
  //JSX
  let classNames = ["page", className];
  let header = null;
  let navBar = null;
  if (showHeader) {
    classNames.push("with_header");
    header = (<div style={{backgroundColor:"#000", color:"#FFF", minHeight:"64px"}}>{title}</div>);
  }
  if (showNavBar) {
    classNames.push("with_navbar");
    //navBar = (<div style={{ backgroundColor: "#000", color: "#FFF", minHeight: "64px" }}></div>);
    navBar = (<NavBar/>);
  }

  return (
    <Fragment>
      {header}
      <section className={classNames.join(" ")}>
        {children}
      </section>
      {navBar}
    </Fragment>
  );
}

export default Page;
