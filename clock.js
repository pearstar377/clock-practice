function getTime() {
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
console.log(d,h,m,s);

var time = h + ":" + m + ":" + s;
console.log(time);
document.getElementById("clock").
innerHTML = time;
setTimeout(getTime, 1000);
}

getTime();