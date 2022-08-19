//Standard requires
const http = require('http');

//Local requres
const app = require('../src/app');
const config = require('../src/config');


const port = process.env.PORT || config.getParameter('port');
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});