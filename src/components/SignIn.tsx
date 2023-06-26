import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import jwt_decode from "jwt-decode";

function SignIn() {
  // If we successfully sign in, then we're going to setAuth in the global context
  // @ts-ignore - setAuth does exist on useAuth
  const { setAuth } = useAuth();
  const handleCallbackResponse = (response: any) => {
    if (response.credential) {
      const userObject = jwt_decode(response.credential);

      console.log("userObject", userObject);
    } else {
      // TODO: proper error handling
      console.log("login failed!");
    }
  };

  useEffect(() => {
    /* global google */
    // @ts-ignore - google defined in public/index.html
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    // @ts-ignore - google defined in public/index.html
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return <div id="signInDiv"></div>;
}

export default SignIn;
