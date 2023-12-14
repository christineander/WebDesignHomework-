var c = document.index.html("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke(200);

//Author
ctx.font = '20pt Roboto';
ctx.fillStyle = 'red';
ctx.fillText('by Molly Bang', 200, 580);