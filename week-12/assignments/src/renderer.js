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

