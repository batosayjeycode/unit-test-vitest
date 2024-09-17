require("dotenv").config({ path: __dirname + "/.env" });
const axios = require("axios");

axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "Bearer " + process.env.JARVIS_TOKEN;
    config.timeout = 5 * 60 * 1000; //5 minutes
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// const testFor = "LOCAL|UAT|PROD";
const testFor = process.env.JARVIS_ENV;

async function fetchData(endpointUrl, additionalParam = "") {
  let url = endpointUrl;
  if (testFor == "LOCAL") {
    const re = new RegExp(
      `${process.env.JARVIS_DOMAIN_PROD}|${process.env.JARVIS_DOMAIN_UAT}`,
      "gi"
    );
    url = url.replace(re, process.env.JARVIS_DOMAIN_LOCAL);
  } else if (testFor == "PROD") {
    const re = new RegExp(
      `${process.env.JARVIS_DOMAIN_LOCAL}|${process.env.JARVIS_DOMAIN_UAT}`,
      "gi"
    );
    url = url.replace(re, process.env.JARVIS_DOMAIN_PROD);
  } else if (testFor == "UAT") {
    const re = new RegExp(
      `${process.env.JARVIS_DOMAIN_PROD}|${process.env.JARVIS_DOMAIN_LOCAL}`,
      "gi"
    );
    url = url.replace(re, process.env.JARVIS_DOMAIN_UAT);
  }
  const txt = url.split("?").length > 1 ? "&" : "";
  const response = await axios.get(`${url}${txt}${additionalParam || ""}`);
  return response.data;
}

module.exports = fetchData;
