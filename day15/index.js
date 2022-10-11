const addItems = document.querySelector('.add-items');
const plates = document.querySelector('.plates');

// items init
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItemHandler(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        name:text,
        checked:false
    }
    items.push(item);
    localStorage.setItem('items',JSON.stringify(items));
    render(items);
    this.reset(); //폼 초기화
}

function checkHandler (e){
    if (e.target.matches('input')) {
        i = e.target.dataset.index;
        items[i].checked = !items[i].checked;
        localStorage.setItem('items',JSON.stringify(items));
        render(items);
    }
}

function render(items){
    plates.innerHTML='';
    plates.innerHTML = items.map((item,i) => {
        return( `
            <li class="item">
                <input type='checkbox' ${item.checked ? 'checked':''} 
                    id="item${i}" data-index=${i} />
                <label for="item${i}">${item.name}</label>
            </li>
        `)}).join('');
}

// 이벤트 등록
addItems.addEventListener('submit',addItemHandler);
plates.addEventListener('click',checkHandler);

render(items);
