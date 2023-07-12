import baseAxios from "axios";


const axios = new baseAxios.create({
  baseURL: process.env.PREACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
