const form = document.querySelector(".form");
const input = document.querySelector(".form__input");


input.addEventListener('blur', function(){
	form.classList.remove('form--active');
});

input.addEventListener('focus', function(){
	form.classList.add('form--active');
});
// video
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove('hidden');
}