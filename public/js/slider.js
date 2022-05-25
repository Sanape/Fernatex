function App() {}

function autoPlay(carousel) {
  console.log(carousel.querySelector('#track'));
}

const AnimalImages = [
  '11.020.svg',
  '11.063.svg',
  '11.199.svg',
  '11.219.Kitten.svg',
  '11.279.Animal.svg',
  '11.285.Constanza.svg',
  '11.316.svg',
  '11.326.Hanna.svg',
  '11.400.svg',
  '30.779.svg',
];
const InfantilImages = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
];
const RayadosImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

window.onload = function (event) {
  var app = new App();
  window.app = app;
  ChangeSlickCategorie('Animales');
  let carousels = document.getElementsByClassName('slick-list');
  for (let i = 0; i < carousels.length; i++) {
    // autoPlay(carousels[i]);
  }
};

App.prototype.processingButton = function (event) {
  const btn = event.currentTarget;
  const slickList = event.currentTarget.parentNode;
  const track = event.currentTarget.parentNode.querySelector('#track');
  const slick = track.querySelectorAll('.slick');

  const slickWidth = slick[0].offsetWidth;

  const trackWidth = track.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track.style.left == ''
    ? (leftPosition = track.style.left = 0)
    : (leftPosition = parseFloat(track.style.left.slice(0, -2) * -1));

  btn.dataset.button == 'button-prev'
    ? prevAction(leftPosition, slickWidth, track, trackWidth, listWidth)
    : nextAction(leftPosition, trackWidth, listWidth, slickWidth, track);
};

let prevAction = (leftPosition, slickWidth, track, trackWidth, listWidth) => {
  if (leftPosition > 0) {
    track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
  } else {
    track.style.left = `${-1 * (trackWidth - listWidth)}px`;
  }
};

let nextAction = (leftPosition, trackWidth, listWidth, slickWidth, track) => {
  if (leftPosition < trackWidth - listWidth) {
    track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
  } else {
    track.style.left = `0px`;
  }
};

var lastBtnClicked = '';
function ChangeSlickCategorie(cat) {
  var track = document.getElementById('track');
  lastBtnClicked != '' ? lastBtnClicked.classList.remove('clicked') : null;
  lastBtnClicked = document.getElementById(`${cat}CatBtn`);
  lastBtnClicked.classList.add('clicked');
  while (track.firstChild) {
    track.removeChild(track.lastChild);
  }
  switch (cat) {
    case 'Animales':
      for (var i = 0; i < AnimalImages.length; i++) {
        var slick = document.createElement('div');
        slick.classList.add('slick');
        var div = document.createElement('div');
        var a = document.createElement('a');
        a.href = '/';
        var picture = document.createElement('picture');
        var img = document.createElement('div');
        //img.alt = AnimalImages[i].toString();
        //img.src = `images/estampados/animal/${AnimalImages[i]}`;
        img.style.backgroundImage = `url(images/estampados/animal/${AnimalImages[i]})`;
        picture.appendChild(img);
        a.appendChild(picture);
        div.appendChild(a);
        slick.appendChild(div);
        track.appendChild(slick);
      }
      break;
    case 'Rayados':
      for (var i = 0; i < RayadosImages.length; i++) {
        var slick = document.createElement('div');
        slick.classList.add('slick');
        var div = document.createElement('div');
        var a = document.createElement('a');
        a.href = '/';
        var picture = document.createElement('picture');
        var img = document.createElement('img');
        img.alt = RayadosImages[i].toString();
        img.src = `images/estampados/rayados/${RayadosImages[i]}`;
        picture.appendChild(img);
        a.appendChild(picture);
        div.appendChild(a);
        slick.appendChild(div);
        track.appendChild(slick);
      }
      break;
    case 'Infantiles':
      for (var i = 0; i < InfantilImages.length; i++) {
        var slick = document.createElement('div');
        slick.classList.add('slick');
        var div = document.createElement('div');
        var a = document.createElement('a');
        a.href = '/';
        var picture = document.createElement('picture');
        var img = document.createElement('img');
        img.alt = InfantilImages[i].toString();
        img.src = `images/estampados/infantil/${InfantilImages[i]}`;
        picture.appendChild(img);
        a.appendChild(picture);
        div.appendChild(a);
        slick.appendChild(div);
        track.appendChild(slick);
      }
      break;
    default:
      break;
  }
}
