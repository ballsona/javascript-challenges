Day 17 

---

##### 정규 표현식(정규식)
- 문자열에 나타나는 특정 문자 조합과 대응시키기 위해 사용되는 패턴
- 정규식을 만드는 방법 2가지
    - 정규식 리터럴 사용 : const re = /ab+c/
    - RegExp 객체 생성자 함수 호출 : const re = new RegExp('ab+c');

##### sort()
```js
sort((a,b)=>{
    if(a>b) return 1;
    else return -1;
})
```