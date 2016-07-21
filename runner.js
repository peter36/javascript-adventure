#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('javascript-adventure');

var problems = [ '01_hello_world', '02_functions' ];
problems.forEach(function (prob) {
    shop.add(prob, function () { return require('./problems/' + prob) });
});

shop.execute(process.argv.slice(2));
