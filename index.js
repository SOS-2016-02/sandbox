

console.log("Hola, cómo estás?");
console.log("Estoy bien ");

console.log("------------Show me the dataWorkers--------");

var fs = require("fs");
var data=[];
var content = fs.readFileSync('dataWorkers.json','utf-8');
data=JSON.parse(content);
data.forEach((data)=>{
	console.log(data.province+ "," +data.year+ "," +data.industry+ "," +data.value);
});
console.log("---------------------------------------------");
