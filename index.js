// title: uptime monirtoring
const http = require('http')
const url = require('url')
const {StringDecoder} = require('string_decoder');

// app object
const app = {};


// config
app.config = {
    port: 5000
};

// Create Server 

app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, () => {
        console.log(`server is running on port ${app.config.port}`);
    });
}

// handle Request Responce
app.handleReqRes = (req, res) => {
    // request handling 
    // get the url and parse it 
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname;
    const trimd = path.replace(/^\/+|\/+$/g, '')
    const method = req.method.toLowerCase()
    const queryStringObject = parsedUrl.query;
    const headersObj = req.headers;  

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    
    req.on('data', (buffer) => {
        realData += decoder.write(buffer)
    })
    
    req.on('end', () => {
        realData += decoder.end()
        console.log(realData);
        // response handle
        res.end('hello programmers');
    }) 
}

// server starting
app.createServer()