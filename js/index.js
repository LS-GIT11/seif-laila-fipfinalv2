let carousel = document.querySelector('#carousel'),
leftarrow = document.querySelector('#left-arrow'),
rightarrow = document.querySelector('#right-arrow');

function slideLeft() {
  carousel.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
  carousel.style.transform = 'translateX(-100%)';
  carousel.addEventListener('transitionend', onTransitionEndLeft);
}

function onTransitionEndLeft() {
  carousel.removeEventListener('transitionend', onTransitionEndLeft);
  carousel.appendChild(carousel.firstElementChild);
  carousel.style.transition = 'none';
  carousel.style.transform = 'translateX(0)';
  carousel.offsetHeight; 
  carousel.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
}

function slideRight() {
  carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
  carousel.style.transition = 'none';
  carousel.style.transform = 'translateX(-100%)';
  carousel.offsetHeight;
  carousel.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
  carousel.style.transform = 'translateX(0)';
}

leftarrow.addEventListener('click', function(e) {
  e.preventDefault();
  slideRight();
});

rightarrow.addEventListener('click', function(e) {
  e.preventDefault();
  slideLeft();
});