import "./App.css";
import Home from "./scenes/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardSocial from "./scenes/dashboard-social";
import Profile from "./scenes/dashboard-social/profile";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/DashboardSocial" element={<DashboardSocial />} />
          <Route exact path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
