const fetchData = require("./fetchDataJarvis");

module.exports = class Helpers {
  static async getDataFromAxios(url, additionalParam = "") {
    try {
      const data = await fetchData(url, additionalParam);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static isAscending(arr) {
    return arr.slice(1).every((num, i) => num >= arr[i]);
  }

  static isDescending(arr) {
    return arr.slice(1).every((num, i) => num <= arr[i]);
  }
};
