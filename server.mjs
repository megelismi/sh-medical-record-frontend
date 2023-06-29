// Initializing installed dependencies
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";
import otpGenerator from "otp-generator";

// Defining the server port
const port = 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initializing env variables
dotenv.config();

// Listening for port 5000
app.listen(5000, () => console.log(`Backend server is running on ${port}`));

// Helper functions
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
      .then((response) => {
        if (response.data.user) {
          const userToken = otpGenerator.generate(12, { specialChars: false });

          return res.status(200).json({
            ...response.data,
            user: { ...response.data.user, token: userToken },
          });
        }

        return res.status(404).json({ error: "User not found" });
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

app.post("/users/add-user", async (req, res) => {
  const email = req.body.email;
  const role = req.body.role;

  if (!email || !role) {
    return res.status(400).json({ error: "Missing information" });
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
