const container = document.querySelector('.container');
const addBtn = document.querySelector('#add-btn');
const addText = document.querySelector('#checkbox-input');

let lastCheckbox;
let shiftPressed = false;

document.body.addEventListener('click',(e)=>{
    if(e.shiftKey) shiftPressed = true;
})

addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const text = addText.value;
    if(text) addCheckbox(text);
    addText.value='';
});

// checkbox 추가
function addCheckbox(text){
    const item = document.createElement('div');
    item.classList.add('item');

    const checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.name = 'checkbox';

    const label = document.createElement('label');
    label.for='checkbox';
    label.innerText = text;

    item.appendChild(checkbox);
    item.appendChild(label);
    container.appendChild(item);

    const checkboxs = document.querySelectorAll('.item input[type="checkbox"]');
    checkboxs.forEach(checkbox => {
        checkbox.addEventListener('change', handleChecked);
    })
}

// check 했을때 
function handleChecked(e){
    const checkboxs = document.querySelectorAll('.container input[type="checkbox"]');
    const targetNode = e.target;
    let inBetween = false;

    // 만약에 쉬프트키를 누른 상태에서 체크하면 lastChecked ~ targetNode 사이를 모두 체크 
    if(shiftPressed && targetNode.checked){
        checkboxs.forEach(cb => {
            if(cb === lastCheckbox || cb === targetNode){
                inBetween = !inBetween;
            } 
            if(inBetween){
                cb.checked = true;
            }
        })
        shiftPressed = false;
    }
    lastCheckbox = targetNode;
    console.log(lastCheckbox)
}
