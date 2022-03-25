const people = require('../people.json')

const getAll = ({ id, firstname, lastname, email, ipaddress }) =>
  new Promise((resolve) => {
    let peopleArray = Array.from(people);
    
    if (id) {
        peopleArray = peopleArray.filter((item) => item.id === id);
    }

    if (firstname) {
        peopleArray = peopleArray.filter((item) => item.firstname === firstname);
    }

    if (lastname) {
        peopleArray = peopleArray.filter((item) => item.lastname === lastname);
    }

    if (email) {
        peopleArray = peopleArray.filter((item) => item.email === email);
    }

    if (ipaddress) {
        peopleArray = peopleArray.filter((item) => item.ipaddress === Number(ipaddress));
    }

    resolve({ code: 200, data: peopleArray });
  });


  const getById = (id) =>
    new Promise((resolve) => {
    const peep = people.find((person) => person.id == id);
    if (peep) {
      resolve({ code: 200, data: peep });
    } else {
      resolve({
        code: 404,
        data: { message: `error` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};

