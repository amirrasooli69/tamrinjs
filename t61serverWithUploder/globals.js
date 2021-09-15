'use strict';

let reqyestObj = {};

const configsObj = require('./configs').configs;

global.request = function request(req) {
    if(req != undefined) {
        reqyestObj = req;
    }

    return;
}

global.configs = function configs() {
    return configsObj;
}