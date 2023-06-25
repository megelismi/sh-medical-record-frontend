// Initializing installed dependencies
import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

// Defining the server port
const port = 5000;

const app = express();
app.use(cors());

// Initializing env variables
dotenv.config();

// Listening for port 5000
app.listen(5000, () => console.log(`Backend server is running on ${port}`));

app.get("/access-token", async (req, res) => {
  await axios
    .post("http://localhost:7000/access-token", {
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    })
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
});
