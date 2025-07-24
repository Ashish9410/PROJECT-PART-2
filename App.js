import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import JobList from "./JobList";
import UploadResume from "./UploadResume";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>ZIDIOConnect</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Register</Link>
          <Link to="/jobs" style={{ marginRight: "15px" }}>Job List</Link>
          <Link to="/upload">Upload Resume</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/upload" element={<UploadResume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
