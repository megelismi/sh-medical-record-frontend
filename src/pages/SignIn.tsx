import { useState } from "react";
import SignInForm from "../components/SignIn";
import SHLogo from "../images/SH_logo.png";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <>
      {errorMessage ? (
        <div className="flex justify-center items-center pt-24">
          <div
            style={{ minWidth: "400px", maxWidth: "600px" }}
            className="w-64 bg-red-100 border border-red-400 text-red-700 px-12 py-3 rounded relative"
            role="alert"
          >
            <div>
              <span className="block sm:inline">{errorMessage}</span>
            </div>
            <div
              onClick={() => setErrorMessage(null)}
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </div>
          </div>
        </div>
      ) : null}
      <div
        className={`flex flex-col justify-start pt-48 items-center w-full h-screen ${
          errorMessage ? "pt-24" : ""
        }`}
      >
        <img className={`w-64 mb-6 `} src={SHLogo} alt="SimpleHealth Logo" />
        <SignInForm onError={(error: string) => setErrorMessage(error)} />
      </div>
    </>
  );
};

export default SignIn;
