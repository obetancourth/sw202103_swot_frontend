import Page from "../Page"
import logo from './logo.svg';

import "./index.css";
const Splash = ()=>{
  return (
    <Page className="page-center" showHeader={true} showNavBar={TextTrackCueList} title="Hola">
      <div className="splash_swot">
        SWOT
      </div>
      <img src={logo} />
      <div className="splash_swot">
        Loading ...
      </div>
    </Page>
  );
}

export default Splash;
