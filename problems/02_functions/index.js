var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'you exported a function');
    t.equal(f(3, 5), 15, '3 * 5 = 15');
    t.equal(f(12, 11), 132, '12 * 11 = 132');
    t.equal(f(200, 1), 200, '200 * 1 = 200');
    t.equal(f(1, 200), 200, '1 * 200 = 200');
    t.equal(f(0.5,0.5), 0.25, '0.5 * 0.5 = 0.25');
    t.equal(f(1, 1), 1, '1 * 1 = 1');
    t.equal(f(0, 9), 0, 'Product should be zero');
    t.equal(f(9, 0), 0, 'Product should be zero');
    t.end();
});
