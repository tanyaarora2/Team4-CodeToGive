// import React from "react";
// import SearchBarSocial from "./SearchBarSocial";
// import { NavBtnLink } from "../../components/Navbar/NavbarELements";
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import EachCasePage from "../Mgmt/EachCasePage";


// const AssignedCasesSocial = () => {
//   const [caseNumberassign, setSelectedCaseNumberassign] = useState(null);
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route
//             exact
//             path="/EachCasePage"
//             element={<EachCasePage caseNumber={caseNumberassign} />}
//           />
//         </Routes>
//       </Router>
//       <nav className="navbar-social">
//         <div className="left-buttons">
//           <div className="NavBtn  Navbtnlink">
//             Assigned Cases
//             <NavBtnLink to="/AssignedCases"></NavBtnLink>
//           </div>
//         </div>
//         <div className="right-buttons">
//           <div className="NavBtn  Navbtnlink">
//             <NavBtnLink to="/">Home</NavBtnLink>
//           </div>
//           <div className="NavBtn  Navbtnlink">
//             <NavBtnLink to="/DashboardSocial">Profile</NavBtnLink>
//           </div>
//         </div>
//       </nav>
//       <SearchBarSocial setSelectedCaseNumberassign={setSelectedCaseNumberassign} />
//     </>
//   );
// }

// export default AssignedCasesSocial;
