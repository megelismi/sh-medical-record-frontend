import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import SHLogo from "../../images/SH_logo.png";
import SearchError from "./SearchError";
import SearchSuccess from "./SearchSuccess";

const TOKEN_NOT_VALID_MESSAGE =
  "Access Token not found, please generate a new one";
let storedAccessToken: string | null = null;
let tokenTries = 0;

const PatientSearch = () => {
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  // SEARCH, SEARCH_SUCCESS, SEARCH_ERROR
  const [mode, setMode] = useState("SEARCH");
  const [loading, setLoading] = useState(false);
  const [medicalRecords, setMedicalRecords] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getAccessToken = async () => {
    tokenTries++;

    if (tokenTries >= 4) {
      throw new Error(
        "Could not generate an access token to retrieve medical records. Please try refreshing the page and/or checking your client credentials."
      );
    }

    if (storedAccessToken !== null) {
      return storedAccessToken;
    }

    // Grab the access token from the server
    // We're doing it this way, so that our client id and client secret
    // is not exposed to the browser
    await axios
      .request({
        method: "GET",
        url: "http://localhost:5000/access-token",
      })
      .then((response: AxiosResponse) => {
        storedAccessToken = response.data.accessToken;
      })
      .catch(function (error) {
        console.error(error);
      });

    return storedAccessToken;
  };

  const getMedicalRecords = async () => {
    let patientMedicalRecords = null;

    const token = await getAccessToken();

    setLoading(true);

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
      .then((res: AxiosResponse) => {
        patientMedicalRecords = { patient: res.data.patient };
      })
      .catch((error) => {
        if (error.response?.data?.error === TOKEN_NOT_VALID_MESSAGE) {
          // If the token is not valid, regenerate the token and try again
          // This is limited to 3 tries before an error is thrown

          storedAccessToken = null;

          return getMedicalRecords();
        }

        // If it exists, prefer to throw the error message from the server
        throw new Error(error.response?.data?.error ?? error);
      });

    setLoading(false);

    return patientMedicalRecords;
  };

  const generatePDFDownloadLink = async () => {
    try {
      const medicalRecords = await getMedicalRecords();

      if (medicalRecords) {
        setMode("SEARCH_SUCCESS");

        setMedicalRecords(medicalRecords);
      } else {
        throw new Error("Records not found.");
      }

      // @ts-ignore
    } catch (error) {
      setMode("SEARCH_ERROR");

      setErrorMessage(
        `There was an error retrieving the medical records: ${error}`
      );

      console.error(
        `There was an error retrieving the medical records: ${error}`
      );
    }
  };

  const disabled = email.trim() === "" || dateOfBirth.trim() === "";

  return (
    <div className="p-5 mt-5 flex flex-col justify-center items-center w-100">
      <img className="w-64 mb-6" src={SHLogo} alt="SimpleHealth Logo" />
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
                {loading ? (
                  <button
                    type="button"
                    className="bg-violet-500 text-white font-bold py-2 px-4 rounded w-full opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 mr-2 text-white animate-spin fill-violet-800"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <div>Processing...</div>
                    </div>
                  </button>
                ) : (
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
                )}
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
    </div>
  );
};

export default PatientSearch;
