(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../data/currency_data.json":2}],2:[function(require,module,exports){
module.exports=[
    {
        "currency": "Ruble",
        "country": "Russia",
        "language": "Irish Gaelic",
        "notes": 92,
        "amount": "$6.69"
    },
    {
        "currency": "Franc",
        "country": "Guinea-Bissau",
        "language": "Dari",
        "notes": 33,
        "amount": "$3.07"
    },
    {
        "currency": "Euro",
        "country": "Finland",
        "language": "Telugu",
        "notes": 28,
        "amount": "$0.13"
    },
    {
        "currency": "Lari",
        "country": "Georgia",
        "language": "Telugu",
        "notes": 97,
        "amount": "$9.38"
    },
    {
        "currency": "Kyat",
        "country": "Myanmar",
        "language": "Marathi",
        "notes": 56,
        "amount": "$2.98"
    },
    {
        "currency": "Euro",
        "country": "Finland",
        "language": "Amharic",
        "notes": 32,
        "amount": "$4.54"
    },
    {
        "currency": "Euro",
        "country": "Portugal",
        "language": "Montenegrin",
        "notes": 15,
        "amount": "$3.21"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Maltese",
        "notes": 1,
        "amount": "$6.21"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Hindi",
        "notes": 34,
        "amount": "$6.07"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Arabic",
        "notes": 7,
        "amount": "$2.73"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Hiri Motu",
        "notes": 6,
        "amount": "$6.63"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Aymara",
        "notes": 76,
        "amount": "$2.80"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Tsonga",
        "notes": 2,
        "amount": "$3.66"
    },
    {
        "currency": "Euro",
        "country": "Greece",
        "language": "Czech",
        "notes": 55,
        "amount": "$3.51"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Finnish",
        "notes": 59,
        "amount": "$7.85"
    },
    {
        "currency": "Baht",
        "country": "Thailand",
        "language": "Oriya",
        "notes": 56,
        "amount": "$8.41"
    },
    {
        "currency": "Ruble",
        "country": "Russia",
        "language": "Amharic",
        "notes": 17,
        "amount": "$5.69"
    },
    {
        "currency": "Dirham",
        "country": "Morocco",
        "language": "Sotho",
        "notes": 91,
        "amount": "$8.03"
    },
    {
        "currency": "Dong",
        "country": "Vietnam",
        "language": "Greek",
        "notes": 81,
        "amount": "$0.10"
    },
    {
        "currency": "Pound",
        "country": "Syria",
        "language": "Papiamento",
        "notes": 9,
        "amount": "$0.11"
    },
    {
        "currency": "Baht",
        "country": "Thailand",
        "language": "Belarusian",
        "notes": 69,
        "amount": "$6.10"
    },
    {
        "currency": "Peso",
        "country": "Philippines",
        "language": "Dhivehi",
        "notes": 47,
        "amount": "$2.23"
    },
    {
        "currency": "Ruble",
        "country": "Russia",
        "language": "Sotho",
        "notes": 82,
        "amount": "$0.27"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Swahili",
        "notes": 70,
        "amount": "$3.99"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Sotho",
        "notes": 40,
        "amount": "$8.81"
    },
    {
        "currency": "Franc",
        "country": "Burkina Faso",
        "language": "Estonian",
        "notes": 29,
        "amount": "$4.02"
    },
    {
        "currency": "Euro",
        "country": "Estonia",
        "language": "Kyrgyz",
        "notes": 22,
        "amount": "$1.51"
    },
    {
        "currency": "Euro",
        "country": "France",
        "language": "Catalan",
        "notes": 58,
        "amount": "$8.83"
    },
    {
        "currency": "Lek",
        "country": "Albania",
        "language": "Albanian",
        "notes": 34,
        "amount": "$2.71"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Swedish",
        "notes": 24,
        "amount": "$0.63"
    },
    {
        "currency": "Rupiah",
        "country": "Indonesia",
        "language": "Khmer",
        "notes": 39,
        "amount": "$2.10"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Bislama",
        "notes": 38,
        "amount": "$3.33"
    },
    {
        "currency": "Franc",
        "country": "Cameroon",
        "language": "Danish",
        "notes": 13,
        "amount": "$0.77"
    },
    {
        "currency": "Dollar",
        "country": "El Salvador",
        "language": "Bislama",
        "notes": 41,
        "amount": "$1.29"
    },
    {
        "currency": "Dollar",
        "country": "New Zealand",
        "language": "Marathi",
        "notes": 64,
        "amount": "$3.57"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Danish",
        "notes": 91,
        "amount": "$7.38"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Czech",
        "notes": 28,
        "amount": "$9.82"
    },
    {
        "currency": "Dollar",
        "country": "United States",
        "language": "Czech",
        "notes": 68,
        "amount": "$5.30"
    },
    {
        "currency": "Rupiah",
        "country": "Indonesia",
        "language": "English",
        "notes": 20,
        "amount": "$2.13"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Catalan",
        "notes": 98,
        "amount": "$9.45"
    },
    {
        "currency": "Krona",
        "country": "Sweden",
        "language": "New Zealand Sign Language",
        "notes": 28,
        "amount": "$8.75"
    },
    {
        "currency": "Peso",
        "country": "Philippines",
        "language": "Romanian",
        "notes": 43,
        "amount": "$4.53"
    },
    {
        "currency": "Rupiah",
        "country": "Indonesia",
        "language": "Armenian",
        "notes": 23,
        "amount": "$9.18"
    },
    {
        "currency": "Forint",
        "country": "Hungary",
        "language": "Pashto",
        "notes": 82,
        "amount": "$1.17"
    },
    {
        "currency": "Rial",
        "country": "Yemen",
        "language": "Estonian",
        "notes": 2,
        "amount": "$9.69"
    },
    {
        "currency": "Rupiah",
        "country": "Indonesia",
        "language": "Khmer",
        "notes": 75,
        "amount": "$9.60"
    },
    {
        "currency": "Dollar",
        "country": "United States",
        "language": "Marathi",
        "notes": 33,
        "amount": "$7.45"
    },
    {
        "currency": "Shilling",
        "country": "Tanzania",
        "language": "Hiri Motu",
        "notes": 68,
        "amount": "$1.13"
    },
    {
        "currency": "Lempira",
        "country": "Honduras",
        "language": "Khmer",
        "notes": 51,
        "amount": "$0.11"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Thai",
        "notes": 57,
        "amount": "$1.91"
    },
    {
        "currency": "Dinar",
        "country": "Jordan",
        "language": "Pashto",
        "notes": 39,
        "amount": "$4.30"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Fijian",
        "notes": 97,
        "amount": "$6.13"
    },
    {
        "currency": "Peso",
        "country": "Philippines",
        "language": "Finnish",
        "notes": 49,
        "amount": "$9.04"
    },
    {
        "currency": "Dollar",
        "country": "New Zealand",
        "language": "Latvian",
        "notes": 43,
        "amount": "$7.27"
    },
    {
        "currency": "Real",
        "country": "Brazil",
        "language": "Dutch",
        "notes": 87,
        "amount": "$1.49"
    },
    {
        "currency": "Euro",
        "country": "Portugal",
        "language": "Tok Pisin",
        "notes": 28,
        "amount": "$0.86"
    },
    {
        "currency": "Peso",
        "country": "Philippines",
        "language": "German",
        "notes": 55,
        "amount": "$5.23"
    },
    {
        "currency": "Rial",
        "country": "Iran",
        "language": "Bislama",
        "notes": 70,
        "amount": "$4.16"
    },
    {
        "currency": "Euro",
        "country": "Estonia",
        "language": "Amharic",
        "notes": 83,
        "amount": "$6.83"
    },
    {
        "currency": "Euro",
        "country": "Greece",
        "language": "Swedish",
        "notes": 8,
        "amount": "$1.61"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "French",
        "notes": 62,
        "amount": "$2.51"
    },
    {
        "currency": "Euro",
        "country": "Cyprus",
        "language": "Albanian",
        "notes": 40,
        "amount": "$7.76"
    },
    {
        "currency": "Franc",
        "country": "Democratic Republic of the Congo",
        "language": "Mongolian",
        "notes": 15,
        "amount": "$3.61"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Tok Pisin",
        "notes": 64,
        "amount": "$3.17"
    },
    {
        "currency": "Peso",
        "country": "Colombia",
        "language": "Oriya",
        "notes": 69,
        "amount": "$0.08"
    },
    {
        "currency": "Peso",
        "country": "Philippines",
        "language": "Macedonian",
        "notes": 63,
        "amount": "$1.42"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Tetum",
        "notes": 81,
        "amount": "$1.75"
    },
    {
        "currency": "Shilling",
        "country": "Kenya",
        "language": "New Zealand Sign Language",
        "notes": 29,
        "amount": "$2.64"
    },
    {
        "currency": "Dollar",
        "country": "Canada",
        "language": "Quechua",
        "notes": 78,
        "amount": "$9.33"
    },
    {
        "currency": "Rupiah",
        "country": "Indonesia",
        "language": "Telugu",
        "notes": 41,
        "amount": "$5.57"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Quechua",
        "notes": 91,
        "amount": "$3.17"
    },
    {
        "currency": "Pound",
        "country": "Syria",
        "language": "Telugu",
        "notes": 26,
        "amount": "$2.30"
    },
    {
        "currency": "Lev",
        "country": "Bulgaria",
        "language": "Japanese",
        "notes": 20,
        "amount": "$1.52"
    },
    {
        "currency": "Ruble",
        "country": "Russia",
        "language": "Chinese",
        "notes": 63,
        "amount": "$4.89"
    },
    {
        "currency": "Ruble",
        "country": "Russia",
        "language": "Portuguese",
        "notes": 74,
        "amount": "$0.75"
    },
    {
        "currency": "Hryvnia",
        "country": "Ukraine",
        "language": "German",
        "notes": 36,
        "amount": "$5.32"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Nepali",
        "notes": 8,
        "amount": "$7.00"
    },
    {
        "currency": "Zloty",
        "country": "Poland",
        "language": "Aymara",
        "notes": 80,
        "amount": "$3.64"
    },
    {
        "currency": "Dollar",
        "country": "United States",
        "language": "Luxembourgish",
        "notes": 90,
        "amount": "$5.72"
    },
    {
        "currency": "Dollar",
        "country": "United States",
        "language": "Danish",
        "notes": 69,
        "amount": "$5.36"
    },
    {
        "currency": "Shilling",
        "country": "Somalia",
        "language": "Persian",
        "notes": 83,
        "amount": "$8.38"
    },
    {
        "currency": "Peso",
        "country": "Philippines",
        "language": "Khmer",
        "notes": 21,
        "amount": "$0.12"
    },
    {
        "currency": "Euro",
        "country": "France",
        "language": "Swati",
        "notes": 57,
        "amount": "$3.14"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Montenegrin",
        "notes": 66,
        "amount": "$5.05"
    },
    {
        "currency": "Naira",
        "country": "Nigeria",
        "language": "Montenegrin",
        "notes": 13,
        "amount": "$3.67"
    },
    {
        "currency": "Sol",
        "country": "Peru",
        "language": "Quechua",
        "notes": 68,
        "amount": "$6.68"
    },
    {
        "currency": "Ruble",
        "country": "Russia",
        "language": "Indonesian",
        "notes": 74,
        "amount": "$0.52"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Oriya",
        "notes": 18,
        "amount": "$7.08"
    },
    {
        "currency": "Leone",
        "country": "Sierra Leone",
        "language": "Tsonga",
        "notes": 3,
        "amount": "$7.48"
    },
    {
        "currency": "Rupiah",
        "country": "Indonesia",
        "language": "Hebrew",
        "notes": 14,
        "amount": "$5.78"
    },
    {
        "currency": "Rupiah",
        "country": "Indonesia",
        "language": "Haitian Creole",
        "notes": 92,
        "amount": "$1.20"
    },
    {
        "currency": "Shilling",
        "country": "Uganda",
        "language": "Tok Pisin",
        "notes": 18,
        "amount": "$3.19"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Guaran??",
        "notes": 16,
        "amount": "$2.74"
    },
    {
        "currency": "Rupiah",
        "country": "Indonesia",
        "language": "Spanish",
        "notes": 46,
        "amount": "$7.98"
    },
    {
        "currency": "Leone",
        "country": "Sierra Leone",
        "language": "Dhivehi",
        "notes": 88,
        "amount": "$8.27"
    },
    {
        "currency": "Dollar",
        "country": "United States",
        "language": "Zulu",
        "notes": 22,
        "amount": "$5.58"
    },
    {
        "currency": "Yuan Renminbi",
        "country": "China",
        "language": "Swahili",
        "notes": 19,
        "amount": "$5.64"
    },
    {
        "currency": "Euro",
        "country": "France",
        "language": "Pashto",
        "notes": 78,
        "amount": "$3.44"
    },
    {
        "currency": "Real",
        "country": "Brazil",
        "language": "Tswana",
        "notes": 13,
        "amount": "$4.68"
    },
    {
        "currency": "Rupiah",
        "country": "Indonesia",
        "language": "Lao",
        "notes": 43,
        "amount": "$5.21"
    }
]
},{}],3:[function(require,module,exports){
const controller = require("./controllers/api.js")

const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  let source = data;

  if (nameTerm) {
    console.log("111")
    source = source.filter(country  =>  country.country ===  nameTerm);
  }

  const rows = source.reduce(
    (acc, { currency, country, language, notes, amount }) =>
      acc +
      `<tr currency="table-row-${currency}"><td>${currency}</td><td>${country}</td><td>${language}</td><td>${notes}</td><td>${amount}</td></tr>`,
    ``
  );``

  tableBody.innerHTML = rows;
};

controller.getAll().then(({data}) => renderTable(data));

let form = document.querySelector("#form");
  form.onsubmit = (event) => {
  event.preventDefault();
  
  const term = event.target.inputfield.value;

  controller.getAll().then(({data}) => renderTable(data, term));
  
};

form.onreset = () => {
  controller.getAll().then(({data}) => renderTable(data));
};


},{"./controllers/api.js":1}]},{},[3]);
