import React from "react";
import "./MgmtLandingPage.css";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";
function MgmtLandingPage() {
  return (
    <div>
      <div className="row">
        <div className="MgmtBoxes">
          {/* <div className="content"> </div> */}
          <h1>1512</h1>
          <br></br>
          <div className="line"></div>
          <br></br>
          <button className="gotoportal">
            <NavBtnLink to="/CompletedCases">Children Benifitted</NavBtnLink>
          </button>
          {/* <h1>Chidren Benifitted</h1>  */}
          {/* <p>Assigned Cases</p> */}
        </div>
      </div>
      <div className="row">
        <div className="MgmtBoxes">
          <h1>278</h1>
          <br></br>
          <div className="line"></div>
          <br></br>
          <h1>In Progress</h1>
          {/* <p>In Progress</p> */}
        </div>
        <div className="MgmtBoxes">
          <h1>97</h1>
          <br></br>
          <div className="line"></div>
          <br></br>
          <h1>To Be Assigned</h1>
          {/* <p>To Be Assigned</p> */}
        </div>
        <div className="MgmtBoxes">
          <h1>24</h1>
          <br></br>
          <div className="line"></div>
          <br></br>
          <h1>Action Needed</h1>
          {/* <p>Action Needed</p> */}
        </div>
      </div>
      {/* <div classname="row"> */}
      <div className="MgmtButton">
        <button className="gotoportal">
          <NavBtnLink to="/ManagementTabsPage">Go To Portal</NavBtnLink>
        </button>
      </div>
    </div>
  );
}

export default MgmtLandingPage;
