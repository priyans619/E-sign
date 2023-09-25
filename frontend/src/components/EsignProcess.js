
import React from 'react';

const EsignProcess = () => {
  const handleEsignProcess = () => {
    // i am sending a request to backend to trigger the e-signing process
    fetch('http://localhost:3000/zoho/esign/pdfId', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log('E-signing process initiated:', data);
      })
      .catch((error) => {
        console.error('Error initiating e-signing process:', error);
      });
  };

  return (
    <div>
      <h2>Initiate E-Signing Process</h2>
      <button onClick={handleEsignProcess}>Initiate E-Signing</button>
    </div>
  );
};

export default EsignProcess;
