const menus = document.querySelectorAll('.cool > li');
const nav = document.querySelector('.top');
const dropdownBackground = document.querySelector('.dropdownBackground');

function enterHandler(){
    // Add classes
    this.classList.add('hover');
    dropdownBackground.classList.add('open');
    setTimeout(()=> this.classList.contains('hover') && this.classList.add('hover-active'),150);

    // Get Coords
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        width: dropdownCoords.width,
        height:dropdownCoords.height,
        left: dropdownCoords.left-navCoords.left,
        top:dropdownCoords.top-navCoords.top
    }

    // Set dropdown-background settings
    dropdownBackground.style.setProperty('width',`${coords.width}px`);
    dropdownBackground.style.setProperty('height',`${coords.height}px`);
    dropdownBackground.style.setProperty('transform',`translate(${coords.left}px,${coords.top}px)`)

}

function leaveHandler(){
    // Remove classes
    this.classList.remove('hover','hover-active');
    dropdownBackground.classList.remove('open');
}

menus.forEach(menu=>menu.addEventListener('mouseenter',enterHandler));
menus.forEach(menu=>menu.addEventListener('mouseleave',leaveHandler));