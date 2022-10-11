## Day6: Ajax Type Ahead

---

### json()

The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

> 함수 이름은 json이지만 JSON 형을 반환하는 함수가 아니다.
> return value : A Promise that resolves to a JavaScript object

```js
fetch(url)
  .then(response => response.json())
  .then(data=>{...})
```

https://developer.mozilla.org/en-US/docs/Web/API/Response/json

###### input 변경된 값을 바로바로 감지하려면?
[1]
input.addEventListener('change', inputHandler);
input.addEventListener('keyup', inputHandler);
[2]
input.addEventListener('input',inputHandler)

###### 대소문자 구분하지 않고 문자열을 비교하려면?

```
const strA = 'This is a case sensitive comparison';
const strB = 'This is a CASE SENSITIVE comparison';
const regex = new RegExp(strA, "gi");
const comparison = regex.match(strB) //true
```
정규표현식 메서드 RegExp 사용

###### 숫자 천단위로 쉼표 넣어주기

const population = res.population.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        



###### TDZ
Temporal Dead Zone


//하... 혼자 해보겠다고 이걸 이렇게 오래 끈... 드디어 끝냈다 
