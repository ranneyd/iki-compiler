var initialContext = require('../analyzer').initialContext

function Program(block) {
  this.block = block
}

Program.prototype.analyze = function () {
  this.block.analyze(initialContext())
}

Program.prototype.optimize = function () {
  console.log('Optimization is not yet implemented')
}

Program.prototype.toString = function () {
  return '(Program ' + this.block + ')' 
}

module.exports = Program
