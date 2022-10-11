// Get Elements
const player = document.querySelector('.player');
const video = document.querySelector('.video');

const toggleBtn = document.querySelector('#togglePlay');
const progress = document.querySelector('.progress_container');
const progressBar = document.querySelector('.progress_bar');

const ranges = document.querySelectorAll('.range');
const skipBtns = document.querySelectorAll('.skip');

// Build functions 
function togglePlay(){
    video.paused ? video.play() : video.pause();
    //video[video.paused ? 'play' : 'pause']();
}

function updateBtn(){
    const icon = video.paused ? '▶' : '❚❚';
    toggleBtn.innerText = icon;
}

function skipPlay () {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange(){
    if(this.name === 'volume'){
        video.volume = this.value;
    } else if (this.name === 'playbackRate') {
        video.playbackRate = this.value;
    }
}

function updateProgress () {
    // progressBar.style.width = (video.currentTime / video.duration) *100 +"%";
    progressBar.style.flexBasis = `${(video.currentTime / video.duration) *100}%`;
}

function updateTimeline(e) {
    const scrubTime = (e.offsetX /progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


// Hook up the event listeners
video.addEventListener('timeupdate',updateProgress);
video.addEventListener('play',updateBtn);
video.addEventListener('pause',updateBtn);
toggleBtn.addEventListener('click',togglePlay);
skipBtns.forEach(btn=>{
    btn.addEventListener('click',skipPlay);
})
ranges.forEach(range=>{
    range.addEventListener('change',handleRange);
    range.addEventListener('mousemove',handleRange);
})

progress.addEventListener('click',updateTimeline);
progress.addEventListener('mousedown',()=> mousedown=true);
progress.addEventListener('mouseup',()=> mousedown=false);
progress.addEventListener('mousemove',(e)=> mousedown && updateTimeline(e));
