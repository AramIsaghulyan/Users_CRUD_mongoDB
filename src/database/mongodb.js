//Standard requires
const mongoose = require('mongoose');

// Library requires

// Local requires
const config = require('../config');

class MongoDB {

    constructor() {

        this.connectionConfig = config.getParameter('mongoUrl');
        this.connection = mongoose.createConnection(this.connectionConfig, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    };
};

module.exports = new MongoDB();