import "./App.css";
import Home from "./scenes/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardSocial from "./scenes/dashboard-social";
import Login from "./scenes/Home/HomePage/LoginPageSocial";
import ManagementTabsPage from "./scenes/Mgmt/ManagementTabs";
import ActionNeededForm from "./scenes/Mgmt/ActionNeeded";
import LoginCase from "./scenes/Home/HomePage/LoginPageCase";
import AbandonedTimeline from "./scenes/Mgmt/AbandonedTimeline";
import OrphanedTimeline from "./scenes/Mgmt/OrphanedTimeline";
import SurrenderedTimeline from "./scenes/Mgmt/SurrenderedTimeline";
import AdmittedTimeline from "./scenes/Mgmt/AdmittedTimeline";
import CompletedCases from "./scenes/Mgmt/CompletedCases";
import EachCasePage from "./scenes/Mgmt/EachCasePage";
import { useState } from "react";
import MgmtLandingPage from "./scenes/Mgmt/MgmtLandingPage";
import SearchBarSocial from "./scenes/dashboard-social/SearchBarSocial";
function App() {
  const [caseNumber, setSelectedCaseNumber] = useState(null);
  const [caseNumberassign, setSelectedCaseNumberassign] = useState(null);
  const [caseNumberaction, setCaseNumberAction] = useState(null);


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
            element={
              <ManagementTabsPage
                setSelectedCaseNumber={setSelectedCaseNumber}
                setCaseNumberAction={setCaseNumberAction}

              />

            }
          />
          <Route
            exact
            path="/AssignedCases"
            element={<SearchBarSocial setSelectedCaseNumberassign={setSelectedCaseNumberassign} />}
          />
          <Route exact path="/ActionNeeded" element={<ActionNeededForm CaseNumberAction={caseNumberaction} />} />
          <Route exact path="/LoginCase" element={<LoginCase />} />
          <Route
            exact
            path="/AbandonedTimeline"
            element={<AbandonedTimeline />}
          />
          <Route
            exact
            path="/OrphanedTimeline"
            element={<OrphanedTimeline />}
          />
          <Route
            exact
            path="/SurrenderedTimeline"
            element={<SurrenderedTimeline />}
          />
          <Route
            exact
            path="/AdmittedTimeline"
            element={<AdmittedTimeline />}
          />
          <Route exact path="/CompletedCases" element={<CompletedCases />} />
          <Route
            exact
            path="/EachCasePage"
            element={<EachCasePage caseNumber={caseNumber} />}
          />
          <Route
            exact
            path="/EachCasePageAssign"
            element={<EachCasePage caseNumber={caseNumberassign} />}
          />
          <Route exact path="/MgmtLandingPage" element={<MgmtLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
