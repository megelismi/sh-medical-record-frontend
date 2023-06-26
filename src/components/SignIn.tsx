import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios, { AxiosResponse } from "axios";

function SignIn() {
  const navigate = useNavigate();

  const handleGoogleCallbackResponse = async (response: {
    credential: string;
  }) => {
    if (response.credential) {
      const userObject: { email?: string } = jwt_decode(response.credential);

      console.log("userObject", userObject);

      if (userObject.email) {
        try {
          await verifyUser(userObject.email);
        } catch (e) {
          // do something with this
          console.error(e);
        }
        // report the error!
      } else {
        // report the error!
      }

      // console.log("userObject", userObject);
    } else {
      // TODO: proper error handling
      console.log("login failed!");
    }
  };

  const verifyUser = async (email: string) => {
    console.log("verifying user...", email);

    // Get the an access token for the medical records api
    const accessToken = await axios
      .request({
        method: "GET",
        url: "http://localhost:5000/access-token",
      })
      .then((response: AxiosResponse) => {
        return response.data.accessToken;
      })
      .catch(function (error) {
        throw new Error(error);
      });

    await axios
      .post(
        "http://localhost:7000/get-user",
        {
          email,
        },
        {
          headers: {
            Authorization: `AccessToken ${accessToken}`,
          },
        }
      )
      .then((res: AxiosResponse) => {
        if (res.data.user) {
          console.log("res.data.user");
          localStorage.setItem("user", res.data.user.email);
          localStorage.setItem("userRole", res.data.user.role);
          navigate("/patient-search");
        }
      })
      .catch((error) => {
        console.error("error verifying user!", error);
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

  return <div id="signInDiv"></div>;
}

export default SignIn;
