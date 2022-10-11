const root = document.documentElement;
const inputs = document.querySelectorAll('input[type=range]');
const img = document.querySelector('img'); 
const colorBox = document.querySelector('#color-box');
   
function updateProperty() {
    root.style.setProperty(`--${this.name}`, `${this.value}px`);
}
inputs.forEach(input => {
    input.addEventListener('change', updateProperty);
    input.addEventListener('mousemove', updateProperty);
})

function changeRandomColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    root.style.setProperty("--base", `#${randomColor}`); 
}
colorBox.addEventListener('click', changeRandomColor);