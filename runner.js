#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('javascript-adventure');

var problems = [ '01_Hello_World', '02_Functions' ];
problems.forEach(function (prob) {
    shop.add(prob.replace(/_/g, ' '), function () { return require('./problems/' + prob.toLowerCase())});
});

shop.execute(process.argv.slice(2));
