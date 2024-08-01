let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = 1800
let height = 600
let radius = 20;
let count = 0;
let timer;
let timer2;
let timer3;
let x;
let y;
let time = 5;
let bg = new Image();
bg.src = "csgo.PNG";

bg.onload = function () {
    ctx.drawImage(bg, 0,0);
}

function cordinates()
{ 
    x = Math.floor(Math.random() * (width - (radius*2)) + (radius * 2))
    y = Math.floor(Math.random() * (height - (radius*2)) + (radius * 2))
    console.log(x + "," + y)
    
}

function circle(x, y)
{
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function clear()
{
    ctx.drawImage(bg, 0,0);
   ctx.clearRect(0, 0, width, height);
   ctx.drawImage(bg, 0,0);
}

function reset(){
	clearInterval(timer);
    clearInterval(timer2);
    clearInterval(timer3);
}

function start1()
{
    cordinates()
    circle(x,y)

}

function start()
{
    reset()
    clear()
    time = 60
    count = 0;
    output.innerHTML = "<h1> Score: " + count + "</h1>"
    timer = setInterval(function(){
        start1()}, 1001
    )
    timer2 = setInterval(function(){
        ctx.drawImage(bg, 0,0);
        clear()
    }, 1000)
     timer3 = setInterval(function(){
        time = time - 1;
        timeDisplay.innerHTML = time;
        if(time == 0){
            reset()
            clear()
        }
        timeDisplay.innerHTML = "<h1>Time left: " + time + "</h1>";
    }, 1000)
    
}

function stop(){
    time = 60
    clear();
    reset();
}

canvas.onclick = function(event){
	let x1 = event.offsetX, y1 = event.offsetY;
	if((x1 >= x - radius && x1 <= x + radius) && (y1 >= y - radius && y1 <= y + radius))
    {
		clear()
        ctx.drawImage(bg, 0,0);
        count += 1
	}
    console.log(x1 + ", " + y1)
   
    output.innerHTML = "<h1> Score: " + count + "</h1>"
}



