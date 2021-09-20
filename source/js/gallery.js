let gallery = document.querySelector('.gallery');
let btn_prev = gallery.querySelector('.button__prev');
let btn_next = gallery.querySelector('.button__next');
let images = gallery.querySelectorAll('.gallery__img');
let trip = document.querySelector('.gallery--route');
let btn_prev_trip = trip.querySelector('.button__prev');
let btn_next_trip = trip.querySelector('.button__next');
let images_trip = trip.querySelectorAll('.gallery__img');
let i = 0;

btn_prev.onclick = function () {
  images[i].style.display = 'none';
  i = i - 1;
  if (i < 0) {
    i = images.length - 1;
  }
  images[i].style.display = 'block';
};
btn_next.onclick = function () {
  images[i].style.display = 'none';
  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
  images[i].style.display = 'block';
};

btn_prev_trip.onclick = function () {
  images_trip[i].style.display = 'none';
  i = i - 1;
  if (i < 0) {
    i = images_trip.length - 1;
  }
  images_trip[i].style.display = 'block';
};
btn_next_trip.onclick = function () {
  images_trip[i].style.display = 'none';
  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
  images_trip[i].style.display = 'block';
};
