const fetchData = require("./fetchDataJarvis");

async function getData(url, additionalParam = "") {
  try {
    const data = await fetchData(url, additionalParam);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = getData;
