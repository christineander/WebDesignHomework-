var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");

//fill text
ctx.font = '35pt Ariel';
ctx.strokeText('Picture This', 100, 550);

//Author
ctx.font = '20pt Ariel';
ctx.fillStyle = 'black';
ctx.fillText('Mac Miller', 200, 580);