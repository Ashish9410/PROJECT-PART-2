import React from "react";

function JobList() {
  // Replace with backend API call
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "ABC Corp" },
    { id: 2, title: "Backend Developer", company: "XYZ Ltd" },
  ];

  return (
    <div className="container">
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} at {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
