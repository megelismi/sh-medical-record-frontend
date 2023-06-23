import React from "react";
import PatientSearch from "./components/patientSearch";
import SHLogo from "./components/images/SH_logo.png";
// import PDF from "./components/pdf";

function App() {
  return (
    <div className="p-5 mt-5 flex flex-col justify-center items-center w-100">
      <img className="w-64 mb-6" src={SHLogo} alt="SimpleHealth Logo" />

      <PatientSearch />
    </div>
  );
}

export default App;
