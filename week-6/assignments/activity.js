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
      ({ nodeName }) => nodeName === `student`
    );
  
    nodes.map((studentNode) =>
      table.appendChild(htmlToElement(generateTableRow(studentNode)))
    );
  };

const generateTableRow = (item) => {
    const firstName = Array.from(item.getElementsByTagName(`firstname`))[0];
    const rollno =  item.attributes[0].textContent;
    const lastname = Array.from(item.getElementsByTagName(`lastname`))[0];
    const nickname = Array.from(item.getElementsByTagName(`nickname`))[0];
    const marks = Array.from(item.getElementsByTagName(`marks`))[0];
  
    console.log(firstName)

    return `<tr>
        <td>${rollno}</td>
        <td>${firstName.textContent} ${lastname.textContent} </td>
        <td>${nickname.textContent}</td>
        <td>${marks.textContent}</td>
    </tr>`;
  };

loadData("http://192.168.56.1:8080/week-6/assignments/students.xml",renderTable)

const onReset = () => {
    window.location.replace(window.location.pathname);
  };