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

const product = require("./controllers/product.js");

const server = http.createServer( async (req, res) => {
    const [basePath, searchParam] = req.url.split(`?`);

    if(basePath === `/api/products`) {
        const {code, data} = await product.getAll(parseParams(searchParam));
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }
    /*if(req.url === `/api/products`) {
        const { code, data} = await product.getAll();
        res.writeHead(code);
        res.end(`products`);
    }*/ else if(basePath.match(/\/api\/products\/\w+/)) {
        const urlElements = req.url.split(`/`);
        const id = urlElements[urlElements.length - 1];

        const {code, data} = await product.getById(id);
        res.writeHead(code,{'content-type': 'application/json' });
        res.end(data);
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({message: `Route not found`}));
    }
});

const PORT = 8080;

server.listen(PORT, () => console.log(`server is running on the port ${PORT}`))