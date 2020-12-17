const express = require('express');
const routes = require('./routes');

const server = express();
server.use('/', routes);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is live at localhost:${PORT}`)
});