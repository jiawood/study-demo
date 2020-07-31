let lodash = require('lodash.js')
let jQury = require('jquery.js')

let names = ['Sunday','Monday']


function name(index){
  return names[index]
}
exports.name = name
function number(name){
  return names.indexOf(name)
}
exports.number = number

