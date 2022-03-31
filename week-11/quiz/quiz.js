const func1 = new Promise((resolve) => resolve(`func1`));

const func2 = new Promise((resolve) => resolve(`func2`));

const func3 = new Promise((resolve) => resolve(`func3`));


// call func1, func2, and func3. wait until ALL of them are resolve and console.log resolved result
const main1 = () => {
    return Promise.all([func1,func2,func3])
    .then((output) => {
        console.log(output)
    })
}

const demofunction = (argument) => {
    return new Promise((resolve, reject) => {
        if (!argument){
            reject(console.log("no arguments passed"))
        }
        resolve(argument);
    })
}




const users = [

    { username: `user1`, email: `user1@email.com` },
    
    { username: `user2`, email: `user2@email.com` }
    
    ];
    
    
    // get user data by username from users array
const getUser = (username) =>
    new Promise((resolve) => {
        users.forEach(element => {
            console.log(element)
            if (element.username === username)
            {    
                email = element.get('email')
            }
        });
    });
    
    
    // get all users for usernames passed as argument
    const getUsers =  (userNames) => 

        new Promise (() =>{
                userobj = getUser(userNames)
                userobj.then(value => console.log(value))   
        });

    
    const main = () => {
        const userNames = [`user1`, `user2`];
        const users =  getUsers(userNames).then(value => console.log(value));
        console.log(users);

    };
    
    
    
main();