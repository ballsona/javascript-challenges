## Day15

---

- localStorage 에 객체 저장/관리하려면
```js
const items = [...]; //관리할 객체 들어있음.

//값 저장하기
localstorage.setItem('items',JSON.stringify(items)); //문자열로 변환 후 저장
//값 불러오기
const data = JSON.parse(localstorage.getItem('items')); //객체로 다시 파싱
```
- data-* 이용함.
```js
//HTML 에서
<input data-index='${i}' />
//JS 에서
const i = e.target.dataset.index;
items[i]...
```

- form 다루기
```js
function addItemHandler(e){
    //여기서 e.target은 form이다.
    const text = (this.querySelector('[name=item]')).value;
    text... //input[name='item'] 의 입력값
    
    this.reset(); //submit 후 input값에 ''를 주지 않고, 폼을 리셋시킬 수 있다.
}
```

- matches 함수
```js
function checkHandler (e){
    if (e.target.matches('input')) {
        //e.target이 input 엘레먼트인지 확인. 
    }
}
```
https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
