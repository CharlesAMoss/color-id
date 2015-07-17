
function WhatColor(x,y){

var box = document.getElementById(x),
    
clr = getComputedStyle(box).getPropertyValue(y);
	
    
var a = clr.split("(")[1].split(")")[0];

a = a.split(",");

var b = a.map(function(x){            
    x = parseInt(x).toString(16);      
    return (x.length==1) ? "0"+x : x;  
})

b = "#"+b.join("");

console.log(b);

}


WhatColor('box', 'background-color');
