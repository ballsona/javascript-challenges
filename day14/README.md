## Day14

---

##### Array 복사

const array = [1,2,3,4];

1. slice( ) 함수로 복사
    ```const copy1 = array.slice();```

2. 빈 배열에 concat() 함수로 array 연결 
    ```const copy2 = [].concat(array);```

3. ES6 spread
    ```const copy3 = [...array];```

4. Array.from()
    ```const copy4 = Array.from(array);```


##### Object 복사

```
const obj = {
    name : 'sona',
    age : 24,
    social : {
        insta : '@sona',
        facebook : '@sona'
    }
}
```

1. Object.assign(빈배열, 복사할 배열)
    ```const copy1 = Object.assign({},obj)```
    ```const copy2 = Object.assign({},obj,{age:25}) //edit ``` 
2. ES6 spread
    ```const copy3 = {...obj};```
<br/>

##### 얕은 복사.
위 복사들은 모두 1 level deep 이다.
위 방식대로 복사한 객체 copy4가 있다고 치자. copy4.social.insta = '@@' 를 실행하면, obj.social.insta 역시 '@@'로 값이 바뀐다. 복사가 name, age, social 까지 딱 1차원?만 적용되는 것이다. 

##### 깊은 복사.
이를 방지하기 위해서는 두가지 방법이 있다.
1. JSON 메소드
```js
    const copy4 = JSON.parse(JSON.stringify(obj));
```
객체를 JSON문자열로 변환후, 이를 다시 js 객체로 변환하는 방법이다.
-> 단점 : 다른 복사 방법에 비해 성능적으로 느리다는 점과, 객체 안에 함수가 있을 경우, JSON.stringify가 이를 undefined로 처리한다는 것.

2. Lodash 라이브러리
```js
    const clonedeep = require("lodash.clonedeep");
    const copy5 = clonedeep(obj);
```
객체 내 함수도 보존 가능한 방법이다.