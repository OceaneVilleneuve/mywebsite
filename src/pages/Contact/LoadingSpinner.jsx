import React from "react";

// Ajoutez ici le code du spinner CSS
const spinnerStyles = `
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-spinner {
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
}
`;

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <style>{spinnerStyles}</style>
      <div className="loading-spinner"></div>
    </div>
  );
}
