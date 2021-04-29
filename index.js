// title: uptime monirtoring
const http = require('http')


const {handleReqRes} = require('./helpers/handleReqRes');

const data = require('./lib/data')

// app object
const app = {};
// testing File System
data.create('test', 'newFile', {'name':'bangladesh', 'language':'bangla'}, (err) => {
    console.log('error was', err);
})

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
app.handleReqRes = handleReqRes;

// server starting
app.createServer()