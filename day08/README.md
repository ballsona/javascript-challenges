## Day8 : Fun with HTML5 Canvas 

---

Html Canvas 에 마우스로 그림 그리기

- beginPath() : 새로운 경로 생성
- moveTo(x,y) : 펜을 x,y 좌표로 옮긴다
- lineTo(x,y) : 현재 위치에서 x,y 만큼 위치까지 선을 그린다
- stroke() : 윤곽선을 이용하여 그린다.
위 함수는 getContext()를 할당한 ctx를 기준으로 작동

###### canvas 전체 화면에 채우기
canvas 의 너비/높이를 100%로 지정하게 되면 내용물이 그 사이즈에 비례하여 변형된다.
태그 안에 width="100%" height="100%"를 해도 퍼센트부호가 무시당한다..
따라서 canvas를 전체화면에 채우려면, js 코드 안에서 화면 너비/높이를 구해서 canvas에 적용시켜야한다.

###### CSS 색상값 표현
1. RGBA
color : rgba(R,G,B,alpha);
- alpha channel 이란 색상의 투명도를 나타낸다. 0은 완전투명 ~ 1은 불투명
2. HSL
color : hsl(h,s,l);
- h는 hue(색상) : 0부터 360까지의 값. color wheel의 각도임
- s는 saturation(채도) : 0%부터 100%까지의 값. 0%면 회색, 100%면 원래 색상(% 붙여야함)
- l은 lightness(명도) : 0%부터 100%까지의 값. 0%면 검정색, 50%면 원래 색상, 100%면 흰색(% 붙여야함) 
3. HSLA
color : hsl(h,s,l,alpha);
- HSL + alpha
4. opacity
color : rgb(0,0,0); opacity:0.3;
- 색상의 투명도. 0은 완전투명 ~ 1은 불투명
- alpha channel와 차이점? 둘다 투명도를 조절하지만, opacity는 해당 요소의 자식 요소까지 전부 같은 투명도로 설정하지만, alpha는 해당 요소만 투명도를 설정한다.