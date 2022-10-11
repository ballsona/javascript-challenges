## Day3 : Playing with CSS Variables and JS

---

#### [html] `<input type="range">`

```html
<input
  type="range"
  id="cowbell"
  name="cowbell"
  min="0"
  max="100"
  value="90"
  step="10"
/>
```

- html 프로그래스바 구현

#### [html] 실시간으로 input값 적용

- addEventListener('change',callbackFunction)을 했더니 input값이 변화할때는 css에 값이 적용되지 않다가, 변화를 멈춰야 값이 적용되었다.
- 해결
  1. input 태그의 oninput 속성
  - oninput="[실시간으로 할일]"
  2. addEventListener('mousemove', cbFunction);
  - 마우스가 움직일때도 콜백함수 부를 수 있게 코드 추가

#### [css] Variables

- :root{--color:#fff} 설정. (html전역에 적용되도록)
- element{background:var(--color)}; 적용
- css 속성값 재사용 가능

#### [js/css] setProperty

```js
const root = document.documentElement;
root.style.setProperty(`--color`, `#000`);
```

+variables 뿐만 아니라 setProperty('border','10px')도 가능

#### [기타] GIT 때문에 눈물 흘릴뻔했다.

#### [기타] input range 예시화면에 맞춰서 css 적용하려고 했는데.. 복잡해보여서 패스.
