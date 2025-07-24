import React, { useState } from "react";

function UploadResume() {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    // Upload logic with backend API
    console.log("Resume uploading:", file);
  };

  return (
    <div className="container">
      <h2>Upload Resume</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
        /><br /><br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadResume;
