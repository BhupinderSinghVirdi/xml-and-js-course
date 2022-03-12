/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */ 


const timeout = async (ms,callback) => {
  return new Promise ((resolve) => {
    setTimeout = (ms) => {
      resolve();
      callback();
    }
  });
}

const generateRandomNumber = () => {
  return Math.floor(Math.random()* 40)
}



const generateData = async (callback) => {
  await timeout(1000, () =>{
    const data = Array.from( {length: 20}, generateRandomNumber )
    callback(data);
    console.log(callback)
  })
}


const convertToFeet = async (meters, callback) => {
  const feet = meters * 3.2808;
   await timeout(3500, () => {
    callback(feet);
  });
}


const processData =  (data, callback) => {
  data.map( (value) => {
    callback(value);
  })
}

const logResult = () =>{
  console.log(`Converted ${meters}m to ${feet}ft`)
}


function main() {
  console.log("Start");
  generateData((data) => {
    processData(data, (value) => {
      convertToFeet(value, (result) => {
        logResult(value, result);
      });
    });
  });


  console.log("Finish");
}

main();
