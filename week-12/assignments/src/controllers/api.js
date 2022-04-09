const currency_data = require("../data/currency_data.json");

const getAll = ({ currency, country, language}={}) =>
  new Promise((resolve) => {
    let result = Array.from(currency_data);
    if (currency) {
      result = result.filter((item) => item.currency === currency);
    }

    if (country) {
      result = result.filter((item) => item.country === country);
    }

    if (language) {
      result = result.filter((item) => item.language === language);
    }
    resolve({ code: 200, data: result });
  });

const getById = (currency) =>
  new Promise((resolve) => {
    const product = currency_data.find((product) => product.currency === currency);

    if (product) {
      resolve({ code: 200, data: JSON.stringify(product) });
    } else {
      resolve({
        code: 404,
        data: { message: `No product found for id ${currency}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
