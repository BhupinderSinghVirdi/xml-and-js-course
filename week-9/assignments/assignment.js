const loadIntoJS = (path) =>
        new Promise ((resolve) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ({ target }) => {
            if (target.readyState == 4 && target.status == 200) {
                resolve(target.responseXML);
            }
        };  
        xhttp.open("GET", path, true);
       
        xhttp.send();
    });
    
const renderDataToJS = (xmlData, term) => {
    const table = document.getElementById("table-main");

    let nodes = Array.from(xmlData.documentElement.childNodes).filter(
        ({ nodeName }) => nodeName === `person`
    );

    const rows = nodes.map((item) => 
    table.appendChild(
        htmlToElement(
            `<tr>
                <td>${(Array.from(item.getElementsByTagName(`name`))[0]).textContent}</td>
                <td>${(Array.from(item.getElementsByTagName(`email`))[0]).textContent}</td>
                <td>${(Array.from(item.getElementsByTagName(`gender`))[0]).textContent}</td>
                <td>${(Array.from(item.getElementsByTagName(`ipaddress`))[0]).textContent}</td>
            </tr>`))
    );

    if(term) {
        nodes = nodes.filter((node) => Array.from(node.getElementsByTagName('name'))[0].textContent.toLowerCase().includes(term))
        rows
    }
}    



const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  };

const generateTableRow = (item) => {
    const Name = Array.from(item.getElementsByTagName(`name`))[0];
    const email = Array.from(item.getElementsByTagName(`email`))[0];
    const gender = Array.from(item.getElementsByTagName(`gender`))[0];
    const ipaddress = Array.from(item.getElementsByTagName(`ipaddress`))[0];

    return `<tr>
        <td>${Name.textContent}</td>
        <td>${email.textContent}</td>
        <td>${gender.textContent}</td>
        <td>${ipaddress.textContent}</td>
    </tr>`;
  };

const onSubmit = (event) => {
	event.preventDefault();
	const searchTerm = event.target.search.value;
	loadIntoJS("/assignment.xml").then((data) => renderDataToJS(data, searchTerm));
};

loadIntoJS("./assignment.xml").then((data) => renderDataToJS(data));

const onReset = () => {
	loadIntoJS("./assignment.xml").then((data) => renderDataToJS(data));
};