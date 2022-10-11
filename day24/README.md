# Day24

---

Top navigation 스크롤시 상단에 고정시키기.

- css 오타 때문에 몇시간 때문에 애먹었다.. (오타 못찾아서 소스를 두번 엎음..)
- navigation 고정 전에는 상단 메뉴가 4개였다가, 고정 이후에는 5개로 메뉴 개수를 바꿀 건데, 바꾸는 과정에 transition을 넣어야했다.
  - 보통 항목을 숨길때 display:none을 사용했는데, transition을 주기 위해 max-width를 사용했다.
  - 숨겨져있을 땐 max-width:0; overhidden:none이었다가, 보여져야할 때 max-width: 높은 수; 를 주는 방법.
