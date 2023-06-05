import "./App.css";
import Home from "./scenes/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardSocial from "./scenes/dashboard-social";
import Login from "./scenes/Home/HomePage/LoginPage";
// import Profile from "./scenes/dashboard-social/profile";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/DashboardSocial" element={<DashboardSocial />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
