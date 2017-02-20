
var ess='let x=n=>n+1';
var es5code=require('babel-core').transform(es6code,{
    presets:['es2015']
}).code;
console.log(es5code)