import "./App.css";
import Home from "./scenes/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardSocial from "./scenes/dashboard-social";
import Login from "./scenes/Home/HomePage/LoginPageSocial";
import ManagementTabsPage from "./scenes/Mgmt/ManagementTabs";
import ActionNeededForm from "./scenes/Mgmt/ActionNeeded";
import AssignedCasesSocial from "./scenes/dashboard-social/AssignedCasesSocial";
import LoginCase from "./scenes/Home/HomePage/LoginPageCase";
import AbandonedTimeline from "./scenes/Mgmt/AbandonedTimeline";
import OrphanedTimeline from "./scenes/Mgmt/OrphanedTimeline";
import SurrenderedTimeline from "./scenes/Mgmt/SurrenderedTimeline";
import AdmittedTimeline from "./scenes/Mgmt/AdmittedTimeline";
import CompletedCases from "./scenes/Mgmt/CompletedCases";
import EachCasePage from "./scenes/Mgmt/EachCasePage";
import { useState } from "react";
function App() {
  const [caseNumber, setSelectedCaseNumber] = useState(null);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/DashboardSocial" element={<DashboardSocial />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/ManagementTabsPage"
            element={<ManagementTabsPage setSelectedCaseNumber={setSelectedCaseNumber}/>}
          />
          <Route
            exact
            path="/AssignedCases"
            element={<AssignedCasesSocial />}
          />
          <Route exact path="/ActionNeeded" element={<ActionNeededForm />} />
          <Route exact path="/LoginCase" element={<LoginCase />} />
          <Route exact path="/AbandonedTimeline" element={<AbandonedTimeline />} />
          <Route exact path="/OrphanedTimeline" element={<OrphanedTimeline />} />
          <Route exact path="/SurrenderedTimeline" element={<SurrenderedTimeline />} />
          <Route exact path="/AdmittedTimeline" element={<AdmittedTimeline />} />
          <Route exact path="/CompletedCases" element={<CompletedCases />} />
          <Route exact path="/EachCasePage" element={<EachCasePage caseNumber={caseNumber}/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
