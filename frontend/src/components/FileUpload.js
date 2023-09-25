
import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = () => {
    if (file) {
      // Creating FormData object ---->> to server
      const formData = new FormData();
      formData.append('pdf', file);

      // Send file ---->> Nest.js backend
      fetch('http://localhost:3000/pdfs/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // If response s converted to JSON that means file is uploaded
          console.log('File uploaded:', data);
          
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
          });
    }
  };

  return (
    <div>
      <h2>Upload PDF File</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
     </div>
  );
};

export default FileUpload;
