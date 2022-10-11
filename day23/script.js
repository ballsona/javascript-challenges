const voiceSelect = document.querySelector('select[name="voice"]');
const input = document.querySelector('textarea');
const settings = document.querySelectorAll('[type="range"],[name="text"]');
const stopBtn = document.querySelector('#stop');
const speakBtn = document.querySelector('#speak');

const msg = new SpeechSynthesisUtterance(); 
msg.text = input.value;
let voices = [];

//Function
function getVoices(){
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = voices
        .filter(voice=>voice.lang.includes('en'))
        .map(voice=>`<option value=${voice.name}>${voice.name} (${voice.lang})</option>`)
        .join('');
};

function setVoice(){
    msg.voice = voices.find(voice=>voice.name === this.value);
}

function setSetting(){
    msg[this.name] = this.value; 
}

function speakHandler(){
    msg.text = input.value;
    speechSynthesis.speak(msg);
};
function stopHandler(){
    speechSynthesis.cancel();
};

//Event 
speechSynthesis.addEventListener('voiceschanged',getVoices);
voiceSelect.addEventListener('change',setVoice);
settings.forEach(setting=> setting.addEventListener('change',setSetting));
speakBtn.addEventListener('click',speakHandler);
stopBtn.addEventListener('click',stopHandler);

