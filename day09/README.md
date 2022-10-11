## Day9 : Dev Tools Domination

---

##### console 다루기 

1. %s : 문자열 지정
```
console.log('string : %s',"Str") 
console.log(`stirng : ${Str}`) //동일함
```
2. %c : 콘솔 결과물에 스타일 지정 
```
console.log('%c haha', 'font-size:100px; color:red' ) //짱신기함
```

3. console.warn('경고')
4. console.error('에러')
5. console.info('정보')
6. console.assert([조건문],'조건문이 false면 찍힐 문장')
> console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
7. console.clear()
8. console.dir()
JS의 객체를 콘솔에 찍을때는 log보다 dir이 더 낫다.
> console.log()는 HTML 같은 트리 구조로 출력. console.dir()는 JSON 와 같은 트리 구조로 출력. 
> console.dir() method displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.

`+` console.dirxml()
html의 하위 요소를 트리 구조로 쉽게 볼수 있다.

9. console.group()/groupCollapsed()/groupEnd()
```
dogs.forEach(dog =>{
    console.groupCollapsed(`group1`);
    console.log(`text1`);
    console.log('text2');
    console.groupEnd(`group`);
})
```
콘솔 로그에 인라인 그룹을 생성한다. groupCollapsed 안의 요소가 그룹 상위 요소가 되고, groupEnd 전까지의 요소들이 인라인 그룹 안에 들어간다.

10. console.time()/timeEnd()
작업 소요 시간을 추적하는 데 사용할 수 있는 타이머.