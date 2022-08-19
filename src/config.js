//Standard requires
const _ = require('lodash');

//Local require
const config = require('../config.json');

class Config {

    constructor() {
    }

    static load() {

        const defaultConfig = config.developmnet;
        const enviroment = process.env.NODE_ENV || 'development';
        const enviromentConfig = config[enviroment];
        this._config = _.merge(defaultConfig, enviromentConfig);
    };

    static getParameter(param) {

        if(undefined == this._config) {
            this.load();
        }
        return this._config[param];
    };
}

module.exports = Config;