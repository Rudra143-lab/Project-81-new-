canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="blue";
line_width=5;


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
ctx.arc(200,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=line_width;
ctx.arc(325,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=line_width;
ctx.arc(450,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=line_width;
ctx.arc(262,265,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=line_width;
ctx.arc(387,265,50,0,2*Math.PI);
ctx.stroke();



 
