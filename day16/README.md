## Day16

---

- contenteditable 속성
input이 아니어도 div,span,p태그에 contenteditable='true' 속성을 주면 요소 텍스트를 편집할 수 있다.

- 마우스 이벤트로 text-shadow 제어

```js
function shadowHandler(e){
    const {offsetWidth:width, offsetHeight:height} = hero;
    let {offsetX:x, offsetY:y} = e;
    if(e.target !== this){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = Math.round((x / width * walk)- walk/2);
    const yWalk = Math.round((y / height * walk)- walk/2);
    console.log(xWalk,yWalk);
    
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgb(255, 0, 0)
    `
}
```
0. hero의 offsetWidth, offsetHeight를 가져온다. -> 변수 width, height
1. e.offsetX, e.offsetY 가져온다 -> 변수 x,y
2. 문제는 div 안에 h1 태그가 있는 상황이라, 만약 마우스가 h1 태그 영역 안으로 들어가는 순간 e.target이 div가 아니라 h1이 되어 offsetX,Y 가 h1을 기준으로 변경된다.
-> 만약 e.target이 div가 아닐경우, x,y에 div 내에서 h1의 x,y 좌표를 더해주었다. 

3. 이제 text-shadow의 거리/방향을 구해줄 차례.
    3-1. walk 이라는 변수를 설정한다. //값은 100
    3-1. h1의 중심부가 (0,0)가 되게 하고, div의 좌측 최상단을 (-walk/2,-walk/2)로 우측 최하단을 (walk/2,walk/2) 으로 만들도록 한다. walk이 커질수록 글자와 그림자의 거리가 멀어진다. 
    3-2. x,y의 범위는 각각 0~width, 0~height이다. x/width, y/height는 이 범위를 모두 0~1로 만든다.
    3-3. 위 값에 walk을 곱하면 범위는 0~walk이 된다. 여기서 walk/2를 빼주면 범위는 -walk/2~ walk/2가 된다.
    3-4. 소수점이 길게 나오므로 Math.round()
(어렵네.. )