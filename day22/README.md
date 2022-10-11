# Day22

---

Element.getBoundingClientRect()
- info about the size of the element and its position relative to the viewport.


a 태그에 highlight를 만들어준다.
- span을 생성후 body.append(span) 해준다.
- a 링크 위에 마우스 호버를 할때마다 span의 넓이와 위치를 변경할건데, 이때 넓이와 위치 설정에 getBoundingClientRect()를 이용한다.

```js
    const linkCoords = this.getBoundingClientRect(); //이때 this는 호버한 a태그
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    highlight.style.top = `${linkCoords.top}px`;
    highlight.style.left = `${linkCoords.left}px`
```
이때 scroll을 하지 않는다면 위 코드가 정상적으로 돌아간다.
하지만 getBoundingClientRect()의 top 과 left는 viewport를 기준으로 값이 설정되기 때문에, 스크롤을 할때마다 값이 바뀌어서 highlight가 점점 이상해진다.

> This means that the rectangle's boundary edges (top, right, bottom, left) change their values every time the scrolling position changes (because their values are relative to the viewport and not absolute).

```js
highlight.style.top = `${linkCoords.top+window.scrollY}px`;
highlight.style.left = `${linkCoords.left+window.scrollX}px`
```

이렇게 scrollX,Y를 더하면 정상적으로 하이라이트가 된다.

https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect