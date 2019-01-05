/**
 * Primary file for the API
 * 
 * 
 */

// Dependencies
const server = require('./lib/server');
const workers = require('./lib/workers');

const app = {};

app.init = function () {
    // Start server
    server.init();

    // Start workers
    workers.init();
}

app.init()

module.exports = app;