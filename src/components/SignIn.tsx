import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios, { AxiosResponse } from "axios";

function SignIn({ onError }: { onError: (errorMessage: string) => void }) {
  const navigate = useNavigate();

  const handleGoogleCallbackResponse = async (response: {
    credential: string;
  }) => {
    if (response.credential) {
      const userObject: { email?: string } = jwt_decode(response.credential);

      if (userObject.email) {
        try {
          await verifyUser(userObject.email);
        } catch (error: any) {
          onError(error.message);
        }
      } else {
        onError("Could not verify Google account");
      }
    } else {
      onError("Could not verify Google account");
    }
  };

  /* This function verifies that the provided email address is a user
   * that exists in the medical records api database.
   * It pings the local Node server, which reaches out to medical records
   * api, and if the user is verified, then the local server will return
   * the user object and a session token. That session token and the user's role
   * is saved in Session Storage.
   */
  const verifyUser = async (email: string) => {
    await axios
      .post("http://localhost:5000/get-user", {
        email,
      })
      .then((res: AxiosResponse) => {
        if (res.data.user) {
          sessionStorage.setItem("user", res.data.user.token);
          sessionStorage.setItem("userRole", res.data.user.role);
          navigate("/medical-records");
        }
      })
      .catch((error) => {
        if (error.response?.data?.error?.status === 404) {
          onError("User account not found");
        } else if (error.response?.data?.error?.status === 400) {
          onError("Bad request - missing email");
        } else {
          onError("Login error. Please check your credentials and try again.");
        }
      });
  };

  useEffect(() => {
    /* global google */
    // @ts-ignore - google defined in public/index.html
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
      callback: handleGoogleCallbackResponse,
    });

    // @ts-ignore - google defined in public/index.html
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    // Disabling this eslint rule because we only want this useEffect to run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div id="signInDiv"></div>
    </>
  );
}

export default SignIn;
