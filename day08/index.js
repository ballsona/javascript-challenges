const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let isDrawing = false;
let hue = 0;
let startX = 0;
let startY = 0;

const initCanvas = ()=>{
    canvas.width= window.innerWidth;
    canvas.height= window.innerHeight;
    ctx.lineCap="round";
    ctx.lineJoin="round"
    ctx.strokeStyle= `hsl(${hue},100%,50%)`;
    ctx.lineWidth=10;
    //ctx.globalCompositeOperation = 'multiply;
}
const startDraw = (e)=> {
    isDrawing = true;
    ctx.lineWidth = Math.random()*20;
    [startX,startY] = [e.offsetX,e.offsetY];
}

const onDraw = (e) =>{
    //no draw
    if(!isDrawing) return;
    //draw start from
    const {offsetX,offsetY} = e;
    ctx.strokeStyle= `hsl(${hue},100%,50%)`;
    
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    //draw to
    ctx.lineTo(offsetX,offsetY);
    ctx.stroke();
    [startX,startY] = [e.offsetX,e.offsetY];
    
    if(hue > 360) hue =0;
    else hue++;
}

const stopDraw = (e) =>{
    isDrawing = false;
    // ctx.closePath();
}

initCanvas();
canvas.addEventListener('mousedown',startDraw);
canvas.addEventListener('mousemove',onDraw);
canvas.addEventListener('mouseup',stopDraw);
canvas.addEventListener('mouseleave',stopDraw);