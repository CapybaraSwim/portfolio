const content = document.getElementById('content');
let scrollStep=645;
document.getElementById('right-button').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = content.scrollLeft,
    cw = content.scrollWidth;
    if ((sl + scrollStep) >= cw) {
      content.scrollTo(cw, 0);
    } else {
      content.scrollTo((sl + scrollStep), 0);
    }
});
document.getElementById('left-button').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = content.scrollLeft;
  if ((sl - scrollStep) <= 0) {
    content.scrollTo(0, 0);
  } else {
    content.scrollTo((sl - scrollStep), 0);
  }
});

let arrows = document.querySelectorAll('.arrow__button');
let active = document.querySelector('.arrow__button.active') || arrows[0];

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', arrowsActive);
}
function arrowsActive() {
    active.classList.remove('active');
    this.classList.add('active');

    active = this;
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open")
  })
})

let headerBgTitle = document.getElementById('header__bg-title-scene');
let headerBgTitleInstance = new Parallax(headerBgTitle);

let unkillableBgTitle = document.getElementById('unkillable__bg-title-scene');
let unkillableBgTitleInstance = new Parallax(unkillableBgTitle);

let unkillablBgTitle = document.getElementById('unkillabl__bg-title-scene');
let unkillablBgTitleInstance = new Parallax(unkillablBgTitle);

let keyBgTitle = document.getElementById('key__bg-title-scene');
let keyBgTitleInstance = new Parallax(keyBgTitle);

