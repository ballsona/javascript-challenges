## Day1 : Javascript Drum Kit

---

### kbd 태그

- 키보드 입력 제공
- 기능적으로 쓰이기보다 문서에 의미 제공.

### Html, css, js 데이터 주고받기 

- data-\* attributes allow us to store extra information
- JS/CSS access

```html
<article id="car" data-key="10"></article>
```

```js
const article = document.querySelector("#car");
print(article.dataset.key); //10

const article_10 = document.querySelector('article[data-key="10"]'); //key가 10인 article 추출
```

```css
article {
  content: attr(data-key);
}
article[data-key="10"] {
  font-size: 100px;
}
```

### [css] transform

- tranform: scale(2,1) : 요소의 가로/세로를 각각 2배,1배 확대

### [css] transition

- 효과 속도 조정
- addEventListener('transitioned',callbackFunction) : transition 완료 감지 후 함수 실행

### js에서 css class 제어하기

- [요소].classList.add('클래스명) : 요소에 클래스 부여
- [요소].classList.remove('클래스명) : 클래스 제거
- [요소].classList.contain('클래스명) : 클래스 가지고 있는지 유무 확인
- [요소].classList.toggle('클래스명) : 클래스 있으면 제거. 없으면 부여.

### querySelectorAll, getElementsByClassName

- document.querySelectorAll() : NodeList[] 반환. forEach 가능
- documnet.getElementsByClassName() : HTMLCollection[] 반환. forEach 불가능

### [기타] keyCode 찾기

https://keycode.info/

#### [기타] 배경 화질 개구림. 하지만 바꾸기 귀찮음.

