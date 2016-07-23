var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');
var util = require('util');
var vm = require('vm');

var marked = require('marked');
var TerminalRenderer = require('marked-terminal');
marked.setOptions({
  renderer: new TerminalRenderer()
});

var fsOption = {
  encoding: 'utf8'
};

exports.problem = marked(fs.readFileSync(__dirname + '/problem.md', fsOption));
exports.solution = marked(fs.readFileSync(__dirname + '/solution.md', fsOption));

exports.verify = verify({ modeReset: true }, function (args, t) {
    var sandbox = {
      result: ''
    };
    var program = fs.readFileSync(path.resolve(args[0]));
    var detectConsoleLog = 'var console = {}; console.log=function(s) { result+=s; };\n';
    const script = new vm.Script(detectConsoleLog + program);
    const context = new vm.createContext(sandbox);
    script.runInContext(context);
    t.equal(sandbox.result, 'Hello World', '"Hello World" is printed');
    t.end();
});
