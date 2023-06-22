import { useState } from "react";
import axios from "axios";
import MedicalRecordsSuccess from "../MedicalRecordsSuccess";

// TODO: put in env variables
const CLIENT_ID = "694545696556";
const CLIENT_SECRET = "JvCjr3Vk9bNLyHDnPu1w3Nng";

const PatientSearch = () => {
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  // mode: SEARCH, SEARCH_SUCCESS, SEARCH_ERROR
  const [mode, setMode] = useState("SEARCH");
  const [medicalRecords, setMedicalRecords] = useState(null);

  const getAccessToken = async () => {
    let accessToken = null;

    await axios
      .post("http://localhost:7000/access-token", {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      })
      // @ts-ignore
      .then((res) => {
        if (res.data.status === "success") {
          accessToken = res.data.accessToken;
        } else if (res.data.status === "error") {
          throw new Error(res.data);
        }
      })
      // @ts-ignore
      .catch((error) =>
        console.error(
          `There was an error retrieving the access token: ${error}`
        )
      );

    return accessToken;
  };

  const getMedicalRecords = async () => {
    let patientMedicalRecords = null;

    // find a way to store the accessToken and expiration...
    // maybe in local or session storage if that's secure enough
    const accessToken = await getAccessToken();

    await axios
      .post(
        "http://localhost:7000/medical-records",
        {
          email,
          dob: dateOfBirth, //yyyy-mm-dd
        },
        {
          headers: {
            Authorization: `AccessToken ${accessToken}`,
          },
        }
      )

      // @ts-ignore
      .then((res) => {
        if (res.data.status === "success") {
          patientMedicalRecords = { patient: res.data.patient };
        } else if (res.data.status === "error") {
          throw new Error(res.data);
        }
      })
      // @ts-ignore
      .catch((error) =>
        console.error(
          `There was an error retrieving the medical record: ${error}`
        )
      );

    return patientMedicalRecords;
  };

  const generatePDFDownloadLink = async () => {
    try {
      const medicalRecords = await getMedicalRecords();

      setMedicalRecords(medicalRecords);

      setMode("SEARCH_SUCCESS");

      console.log("medicalRecords", medicalRecords);
    } catch (e) {
      // TODO: Set an error that we can show in the UI
    }
  };

  const disabled = email.trim() === "" || dateOfBirth.trim() === "";

  return (
    <>
      {mode === "SEARCH" ? (
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                onClick={generatePDFDownloadLink}
                className={`bg-violet-500 text-white font-bold py-2 px-4 rounded w-full ${
                  disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-violet-700"
                }`}
              >
                Get Medical Records
              </button>
            </div>
          </div>
        </form>
      ) : mode === "SEARCH_SUCCESS" ? (
        <MedicalRecordsSuccess
          medicalRecords={medicalRecords}
          onBack={() => {
            // TODO: Hit some reset mode where we refresh everything
            setMode("SEARCH");
          }}
        />
      ) : null}
    </>
  );
};

export default PatientSearch;
