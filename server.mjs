// Initializing installed dependencies
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";
import otpGenerator from "otp-generator";
import NodeCache from "node-cache";

// Defining the server port
const port = 5000;

const app = express();

// Create a server side cache
// Time to expire is infinity
// NOTE: In development, the cache will reset if you ever
// make changes to this server file
const cache = new NodeCache({ stdTTL: 0, checkperiod: 0 });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initializing env variables
dotenv.config();

// Listening for port 5000
app.listen(5000, () => console.log(`Backend server is running on ${port}`));

// Helper functions

// This uses the client id and client secret to grab an access token
// for the medical records api
async function getAccessToken() {
  const accessToken = await axios
    .post("http://localhost:7000/access-token", {
      client_id: process.env.REACT_APP_MEDICAL_RECORDS_API_CLIENT_ID,
      client_secret: process.env.REACT_APP_MEDICAL_RECORDS_API_CLIENT_SECRET,
    })
    .then((response) => {
      return response.data.accessToken;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return accessToken;
}

// Routes
app.get("/access-token", async (req, res) => {
  try {
    const accessToken = await getAccessToken();

    return res.status(200).json({ accessToken });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

// Gets all the authorized users for the application
app.get("/users/get-all", async (req, res) => {
  const accessToken = await getAccessToken();

  try {
    await axios
      .post(
        "http://localhost:7000/users/get-all",
        {},
        {
          headers: {
            Authorization: `AccessToken ${accessToken}`,
          },
        }
      )
      .then((response) => {
        return res.status(200).json(response.data);
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

// Verifies that the given email corresponds to a user
// of this application
app.post("/users/get-user", async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ error: "Missing user email" });
  }

  try {
    const accessToken = await getAccessToken();

    await axios
      .post(
        "http://localhost:7000/users/get-user",
        {
          email,
        },
        {
          headers: {
            Authorization: `AccessToken ${accessToken}`,
          },
        }
      )
      .then(async (response) => {
        if (response.data.user) {
          const userToken = otpGenerator.generate(12, { specialChars: false });

          // Save the user data in the node-cache for 24 hours
          // We save it on the server side so that we can verify the user
          // token when certain requests are made. The user token is saved
          // in Session Storage on the frontend, so we always want to ensure
          // that it wasn't tampered with.
          await cache.set("loggedInUserToken", userToken, 86400);
          await cache.set("loggedInUserRole", response.data.user.role, 86400);

          return res.status(200).json({
            ...response.data,
            user: { ...response.data.user, token: userToken },
          });
        }

        return res.status(404).json({ error: "User not found" });
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json({ error });
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

// This route makes sure that the user token passed in from
// frontend matches the cached version on the server
app.post("/users/verify-user", async (req, res) => {
  const userToken = req.body.userToken;

  const loggedInUserToken = cache.get("loggedInUserToken");

  if (loggedInUserToken !== userToken) {
    return res
      .status(401)
      .json({ statusCode: 401, status: "error", error: "Unauthorized" });
  }

  return res.status(200).json({ statusCode: 200, status: "success" });
});

// Allows admins of this application to add new users
app.post("/users/add-user", async (req, res) => {
  const email = req.body.email;
  const role = req.body.role;

  if (!email || !role) {
    return res.status(400).json({ error: "Missing information" });
  }

  const loggedInUserRole = cache.get("loggedInUserRole");

  if (loggedInUserRole !== "ADMIN") {
    return res
      .status(401)
      .json({ error: "Must be an admin to create a user!" });
  }

  try {
    const accessToken = await getAccessToken();

    await axios
      .post(
        "http://localhost:7000/users/add-user",
        {
          email,
          role,
        },
        {
          headers: {
            Authorization: `AccessToken ${accessToken}`,
          },
        }
      )
      .then((response) => {
        return res.status(200).json(response.data);
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
