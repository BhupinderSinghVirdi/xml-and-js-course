const citizen_data = require("../Data/citizen.json");

const getAll = ({ full_name, city, SIN, country }={}) =>
  new Promise((resolve) => {
    let result = Array.from(citizen_data);
    if (full_name) {
      result = result.filter((item) => item.full_name === full_name);
    }

    if (city) {
      result = result.filter((item) => item.city === city);
    }

    if (country) {
      result = result.filter((item) => item.country === country);
    }

    if (SIN) {
      result = result.filter((item) => item.SIN == SIN);
    }
    resolve({ code: 200, data: result });
  });

const getById = (SIN) =>
  new Promise((resolve) => {
    const citizen = citizen_data.find((citizen) => citizen.SIN == SIN);

    if (product) {
      resolve({ code: 200, data: citizen });
    } else {
      resolve({
        code: 404,
        data: { message: `No citizen found for SIN ${citizen}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
