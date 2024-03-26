const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "f21bc469dd56bad0c74208e0e7266296";

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/weather", (req, res) => {
  let infoType = req.query.infoType;
  let paramss = { ...req.query };
  delete paramss.infoType;
  let x = req.query.searchParams;

  const options = {
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/${infoType}`,
    params: { ...paramss, appid: API_KEY },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`server is running on port ${PORT}`));
