var sleep = require('system-sleep')

Array.prototype.each = function(iterate) {
var list = this,
    length = list.length
    i = -1;

var interval = setInterval(function () {
if(i >= length) clearInterval(interval);

i++

if(typeof list[i] == 'undefined') return;

if(i <= length) iterate(list[i], i)
}, 2)
}


var arr = []
var list = []
for(var i = 0; i < 500; i++) arr[i] = i

arr.each(function(item, index){
list.push(item)
})
sleep(2000)
console.log(list[488])
