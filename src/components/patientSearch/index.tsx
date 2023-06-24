import { useState } from "react";
import axios from "axios";
import SearchError from "./SearchError";
import SearchSuccess from "./SearchSuccess";

// TODO: put in env variables
const CLIENT_ID = "694545696556";
const CLIENT_SECRET = "JvCjr3Vk9bNLyHDnPu1w3Nng";
const TOKEN_NOT_VALID_MESSAGE =
  "Access Token not found, please generate a new one";
let storedAccessToken: string | null = null;
let tokenTries = 0;

const PatientSearch = () => {
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  // mode: SEARCH, SEARCH_SUCCESS, SEARCH_ERROR
  const [mode, setMode] = useState("SEARCH");
  const [medicalRecords, setMedicalRecords] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getAccessToken = async () => {
    tokenTries++;

    console.log("tokenTries", tokenTries);

    if (tokenTries >= 4) {
      console.log("why are we getting here??");
      throw new Error(
        "Could not generate an access token to retrieve medical records. Please check your client credentials."
      );
    }

    if (storedAccessToken !== null) {
      console.log("returning stored access token");
      console.log("accessToken", storedAccessToken);
      return storedAccessToken;
    }

    console.log("generating new access token");

    await axios
      .post("http://localhost:7000/access-token", {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      })
      // @ts-ignore
      .then((res) => {
        storedAccessToken = res.data.accessToken;
      })
      // @ts-ignore
      .catch((error) => {
        setMode("SEARCH_ERROR");
        setErrorMessage(
          `There was an error retrieving the medical record: ${error}`
        );
        console.error(
          `There was an error retrieving the access token: ${error}`
        );
      });

    return storedAccessToken;
  };

  const getMedicalRecords = async () => {
    let patientMedicalRecords = null;

    const token = await getAccessToken();

    await axios
      .post(
        "http://localhost:7000/medical-records",
        {
          email,
          dob: dateOfBirth, //yyyy-mm-dd
        },
        {
          headers: {
            Authorization: `AccessToken ${token}`,
          },
        }
      )

      // @ts-ignore
      .then(async (res) => {
        patientMedicalRecords = { patient: res.data.patient };
      })
      // @ts-ignore
      .catch((error) => {
        if (error.response?.data?.error === TOKEN_NOT_VALID_MESSAGE) {
          // If the token is not valid, regenerate the token and try again
          // This is limited to 3 tries before an error is thrown

          storedAccessToken = null;

          return getMedicalRecords();
        }

        setMode("SEARCH_ERROR");
        setErrorMessage(
          `There was an error retrieving the medical record: ${error}`
        );

        console.error(
          `There was an error retrieving the medical record: ${error}`
        );
      });

    return patientMedicalRecords;
  };

  const generatePDFDownloadLink = async () => {
    try {
      const medicalRecords = await getMedicalRecords();

      setMedicalRecords(medicalRecords);

      setMode("SEARCH_SUCCESS");
      // @ts-ignore
    } catch (error: { message: string }) {
      setMode("SEARCH_ERROR");
      setErrorMessage(error.message);

      console.log("are we throwing here????");

      console.error(
        `There was an error retrieving the medical record: ${error.message}`
      );
    }
  };

  const disabled = email.trim() === "" || dateOfBirth.trim() === "";

  return (
    <>
      {mode === "SEARCH" ? (
        <>
          <div className="py-10">
            Some text explaining the medical records search
          </div>
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
        </>
      ) : mode === "SEARCH_SUCCESS" ? (
        <SearchSuccess
          medicalRecords={medicalRecords}
          onBack={() => {
            // TODO: Hit some reset mode where we refresh everything
            setMode("SEARCH");
          }}
        />
      ) : mode === "SEARCH_ERROR" ? (
        <SearchError
          errorMessage={errorMessage}
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
