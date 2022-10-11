const divs = document.querySelectorAll('div')

function logText(e){
    e.stopPropagation();
}

divs.forEach(div=>div.addEventListener('click',logText),
    {capture: true});