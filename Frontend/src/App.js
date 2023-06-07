import "./App.css";
import Home from "./scenes/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardSocial from "./scenes/dashboard-social";
import Login from "./scenes/Home/HomePage/LoginPage";
import AssignedCasesSocial from "./scenes/dashboard-social/AssignedCasesSocial";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/DashboardSocial" element={<DashboardSocial />} />
          <Route
            exact
            path="/AssignedCases"
            element={<AssignedCasesSocial />}
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;
