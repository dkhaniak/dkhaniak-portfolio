const track = document.getElementById('track');

const slides = Array.from(track.children);
const originalCount = slides.length;

track.innerHTML += track.innerHTML;

let index = 0;
const width = 280;

let interval = setInterval(nextSlide, 3500);

function update() {
  track.style.transform = `translateX(-${index * width}px)`;
}

function nextSlide() {
  index++;
  update();

  if (index >= originalCount) {
    setTimeout(() => {
      track.style.transition = "none";
      index = 0;
      update();
      setTimeout(() => {
        track.style.transition = "transform 0.8s cubic-bezier(0.22,1,0.36,1)";
      }, 50);
    }, 800);
  }
}

function prevSlide() {
  if (index <= 0) {
    track.style.transition = "none";
    index = originalCount;
    update();
    setTimeout(() => {
      track.style.transition = "transform 0.8s cubic-bezier(0.22,1,0.36,1)";
    }, 50);
  }

  index--;
  update();
}

document.querySelector('.slider').addEventListener('mouseenter', () => {
  clearInterval(interval);
});

document.querySelector('.slider').addEventListener('mouseleave', () => {
  interval = setInterval(nextSlide, 3500);
});

gsap.from("h1", {y: 40, opacity: 0, duration: 1});
gsap.from(".subtitle", {opacity: 0, delay: 0.3});
gsap.from(".description", {opacity: 0, delay: 0.6});