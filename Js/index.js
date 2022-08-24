const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

/* function-run() */
function run() {
 idx++;
 changeImage();
}

/* function-changeImage() */
function changeImage() {
 if (idx > img.length - 1) {
  idx = 0;
 } else if (idx < 0) {
  idx = img.length - 1
 }

 imgs.style.transform = `translateX(${-idx * 500}px)`
}

/* function-ResetInterval() */
function resetInterval() {
 clearInterval(interval);
 interval = setInterval(run, 2000)
}

/* eventListener */
rightBtn.addEventListener('click', () => {
 idx++;
 changeImage();
 resetInterval();
})

leftBtn.addEventListener('click', () => {
 idx--;
 changeImage();
 resetInterval();
})