#!/usr/bin/env node

const cowsay = require("cowsay");

function sayHello() {
    console.log(cowsay.say({
        "text" : "hellow with cowsay and install"
    }));
}

module.exports.sayHello = sayHello;