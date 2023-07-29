var today = new Date();
console.log("todays date is: " + today)
var day = today.getDay()
var datalist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("today is :" + datalist[day] + ".");
var hours = today.getHours(); 
console.log(hours)
var minutes = today.getMinutes();
console.log(minutes)
var seconds = today.getSeconds();
console.log(seconds)

console.log("current time is" + " " + hours + ":" + minutes + ": " + seconds   )