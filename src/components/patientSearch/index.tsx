import { useState } from "react";
import axios from "axios";

const PatientSearch = () => {
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleGetMedicalRecords = () => {
    console.log("email", email);
    console.log("dateOfBirth", dateOfBirth);

    axios
      .post("http://localhost:7000/medical-records/get", {
        email,
        dob: dateOfBirth, //yyyy-mm-dd
      })
      // @ts-ignore
      .then((res) => {
        console.log("res", res);
      })
      // @ts-ignore
      .catch((error) =>
        console.error(
          `There was an error retrieving the medical record: ${error}`
        )
      );
  };

  const disabled = email.trim() === "" || dateOfBirth.trim() === "";

  return (
    <form
      className="w-1/3 min-w-max max-w-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-email"
            type="text"
            placeholder="alice@gmail.com"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-dob"
          >
            Date of Birth
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-dob"
            type="date"
            placeholder="09/30/1993"
            onChange={(e) => setDateOfBirth(e.currentTarget.value)}
          />
        </div>
        <div className="w-full flex items-center justify-center px-3 py-8">
          <button
            disabled={disabled}
            onClick={handleGetMedicalRecords}
            className={`bg-violet-500 text-white font-bold py-2 px-4 rounded w-full ${
              disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-violet-700"
            }`}
          >
            Get Medical Records
          </button>
        </div>
      </div>
    </form>
  );
};

export default PatientSearch;
