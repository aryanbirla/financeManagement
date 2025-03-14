import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./COMPONENTS/DASHBOARD/dashboard";

// import Reports from "./Reports";
// import Settings from "./Settings";
// import Sidebar from "./Sidebar";

function App() {
  return (
    <Router>
      <div className="d-flex">
        {/* <Sidebar /> */}
        <div className="container-fluid p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
