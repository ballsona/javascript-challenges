const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500;

function shadowHandler(e){
    const {offsetWidth:width, offsetHeight:height} = hero;
    let {offsetX:x, offsetY:y} = e;
    if(e.target !== this){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = Math.round((x / width * walk)- walk/2 );
    const yWalk = Math.round((y / height * walk)- walk/2);
    console.log(xWalk,yWalk);
    
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgb(255, 0, 0)
    `
}

hero.addEventListener('mousemove',shadowHandler);