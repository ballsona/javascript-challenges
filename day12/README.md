## Day12

---

```js
array.splice(-secretCode.length-1, pressed.length-secretCode.length);
```

시크릿 코드의 길이가 6이라고 하자. 
pressed의 길이가 6이기 전까지는 splice의 두번째 인자가 계속 0이나 음수다.
splice의 두번째 인자가 0이나 음수일떄는 아무런 일도 일어나지 않으므로 계속 베열에 값이 push 되다가, 길이가 6이 넘어가면 두번째 인자가 1이 되면서 array[-7] 부터 array[0]까지의 값이 제거된다. 
(약간 queue 구현 같기도...)


##### splice 참고
https://velog.io/@sji7532/Array-slice와-splice-차이점



```
 <script type="text/javascript" src="https://www.cornify.com/js/cornify.js"></script>
```
+cornify_add() 실행하면 화면 어딘가에 유니콘이 나온다... 진짜 살짝 귀여움