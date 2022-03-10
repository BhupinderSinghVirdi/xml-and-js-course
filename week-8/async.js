function timeout(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

const timeoutT = (ms) => {
  return new Promise((resolve) => setTimeout(1000).then(resolve(),ms));
}

async function inc(a) {
  await timeout(2000);
  return a + 1;
}

const incT = (a) => {
  return new Promise((resolve) => timeout(2000).then(() => resolve(a+1)));
};

const sum = async function (a, b) {
  await timeout(2000);
  return a + b;
};

const sumT = (a,b) =>{
  return new Promise((resolve) => timeout(2000).then(()=> resolve(a+b)))
};


const max = async (a, b) => {
  await timeout(2000);

  return a > b ? a : b;
};

const maxT = (a,b) => {
  return new Promise((resolve) => timeout(1000).then(() => resolve(a > b ? a : b)))
}

const avg = async (a, b) => {
  await timeout(2000);
  const s = await sum(a, b);
  return s / 2;
};

const avgT = (a,b) => {
  return new Promise((resolve) => 
    timeout(2000).then(() =>  
      { sumT(a,b).then((s) => 
        {
          resolve(s/2)
      });
      }
  ));
}

const obj = {
  name: "Marcus Aurelius",
  async split(sep = " ") {
    await timeout(2000);

    return this.name.split(sep);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static async of(name) {
    await timeout(2000);

    return new Person(name);
  }

  async split(sep = " ") {
    await timeout(2000);

    return this.name.split(sep);
  }
}



const person = new Person("Marcus Aurelius");

const FinalT = (() => {
    incT(5).then((value) => {
      console.log("await inc(5) =", value )
    });
    sumT(1, 3).then((value) => {
      console.log("await sum(1, 3) =", value )
    });   
    maxT(8, 6).then((value) => {
      console.log("await max(8, 6) =", value )
    });
    avgT(8, 6).then((value) => {
      console.log("await avg(8, 6) =", value )
    });
    
  /*
  console.log("await inc(5) =",  inc(5).then());
  console.log("await sum(1, 3) =",sumT(1, 3) );
  console.log("await max(8, 6) =",  maxT(8, 6));
  console.log("await avg(8, 6) =",  avgT(8, 6));    
  console.log("await obj.split() =",  obj.split());
  console.log("await person.split() =",  person.split());
  */
})();
