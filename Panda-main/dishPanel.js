let favorite = [
  "img/favorite.svg",
  "img/favorite__active.svg"
    // добавьте пути к другим изображениям, если нужно
];
var currentImage = 0;

function changeImageF() {
  var image = document.getElementById('favorite');
  currentImage = (currentImage + 1) % favorite.length;
  image.style.opacity = 0; // устанавливаем непрозрачность изображения в 0
  setTimeout(function() {
    image.src = favorite[currentImage];
    image.style.opacity = 1; // устанавливаем непрозрачность изображения в 1
  }, 500); // задержка в 500 миллисекунд (0.5 секунды), чтобы анимация успела сработать
}



let like = [
  "img/like.svg",
  "img/like__active.svg"
    // добавьте пути к другим изображениям, если нужно
];
var currentImage = 0;

function changeImageL() {
  var image = document.getElementById('like');
  currentImage = (currentImage + 1) % like.length;
  image.style.opacity = 0; // устанавливаем непрозрачность изображения в 0
  setTimeout(function() {
    image.src = like[currentImage];
    image.style.opacity = 1; // устанавливаем непрозрачность изображения в 1
  }, 500); // задержка в 500 миллисекунд (0.5 секунды), чтобы анимация успела сработать
}


    