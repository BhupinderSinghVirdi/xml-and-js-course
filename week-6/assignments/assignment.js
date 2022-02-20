const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        callback(target.responseXML);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  };

const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  };
const renderTable = (xmlData) => {
    const table = document.getElementById("table-main");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `person`
    );
  
    nodes.map((personNode) =>
      table.appendChild(htmlToElement(generateTableRow(personNode)))
    );
  };

const generateTableRow = (item) => {
    const Name = Array.from(item.getElementsByTagName(`name`))[0];
    const email = Array.from(item.getElementsByTagName(`email`))[0];
    const gender = Array.from(item.getElementsByTagName(`gender`))[0];
    const ipaddress = Array.from(item.getElementsByTagName(`ipaddress`))[0];
  
    console.log(Name)

    return `<tr>
        <td>${Name.textContent}</td>
        <td>${email.textContent}</td>
        <td>${gender.textContent}</td>
        <td>${ipaddress.textContent}</td>
    </tr>`;
  };

loadData("http://192.168.56.1:8080/week-6/assignments/assignment.xml",renderTable)

const onReset = () => {
    window.location.replace(window.location.pathname);
  };