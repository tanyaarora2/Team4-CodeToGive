import React from "react";
import SearchBarSocial from "./SearchBarSocial";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";
import DataSocial from "./DataSocial";

function AssignedCasesSocial() {
  return (
    <>
      <nav className="navbar-social">
        <div className="left-buttons">
          <div className="NavBtn  Navbtnlink">
            Assigned Cases
            <NavBtnLink to="/AssignedCases"></NavBtnLink>
          </div>
        </div>
        <div className="right-buttons">
          <div className="NavBtn  Navbtnlink">
            <NavBtnLink to="/">Home</NavBtnLink>
          </div>
          <div className="NavBtn  Navbtnlink">
            <NavBtnLink to="/DashboardSocial">Profile</NavBtnLink>
          </div>
        </div>
      </nav>
      <SearchBarSocial />

      <DataSocial />
    </>
  );
}

export default AssignedCasesSocial;
