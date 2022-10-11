## Day 20
---
와 이젠 음성인식까지 구현을 한다... 나.. 좀 쩌는걸?

### Web Speech API
https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

##### 초기화
```js
// 새로운 SpeechRecognition 객체 생성
const recognition = new SpeechRecognition();
//인식할 언어를 설정
recognition.lang = 'en-US'
//임시 결과를 리턴할것인가에 대한 여부 설정.
//문장이 끝나기 전까지 인식되는 단어를 계속 리턴할 것인가(true). 문장이 끝나면 그때 결과를 리턴할 것인가(false).
recognition.interimResults=false;
//결과 당 SpeechRecognitionAlternatives 개수 최댓값.
//이값이 높을수록 음성 인식 정확도 높음.
recognition.maxAlternatives = 1;
```
##### method 설정
```js
//음성 인식 중단.
recognition.abort()
//음성 인식 시작.
recognition.start()
//음성 인식 중단. abort와는 다르게 SpeechRecognitionResult 리턴은 시도한다.
recognition.stop()
```
##### addEventListener()을 통해 이벤트 설정
- audiostart
- audioend
    - 오디오가 시작될때.
- start
- end
- error
- nomatch
    - 어떤 의미있는 인식없이 결과를 리턴할경우.
- result 
    - 결과를 리턴할 경우.
- soundstart
- soundend
    - 어떤 소리든 소리가 인지될때.
- speechstart
- speechend
    - 스피치가 감지되어 음성 인식이 시작될때.