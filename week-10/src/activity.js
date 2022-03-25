const http = require("http");

const parseParams = (searchparams) => {
    const params = new  URLSearchParams(searchparams);
    return Array.from(params.entries()).reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]: value
        }),
        {}
    );
};

const people = require("./controllers/people.js");

const server = http.createServer( async (req, res) => {
    const [basePath, searchParam] = req.url.split(`?`);

    if(basePath === `/api/people`) {
        const {code, data} = await people.getAll(parseParams(searchParam));
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }
    else if(basePath.match(/\/api\/people\/\w+/)) {
        const urlElements = basePath.split(`/`);
        const id = urlElements[urlElements.length - 1];
        console.log(id)
        const {code, data} = await people.getById(id);
        res.writeHead(code, {'content-type': 'application/json' });
        res.end(JSON.stringify(data));
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({message: `Route not found`}));
    }
});

const PORT = 8080;

server.listen(PORT, () => console.log(`server is running on the port ${PORT}`))