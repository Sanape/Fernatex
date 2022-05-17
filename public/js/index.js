function enroll(a) {
  window.scrollBy({
    top: a,
    left: 0,
    behavior: 'smooth',
  });
}
function scroolTo(cat) {
  var bodyRect = document.body.getBoundingClientRect();
  switch (cat) {
    case 'Animales':
      document.getElementById('view-Animales').scrollIntoView();
      break;
    case 'Rayados':
      document.getElementById('view-Rayados').scrollIntoView();
      break;
    case 'Infantiles':
      document.getElementById('view-Infantiles').scrollIntoView();
      break;
    default:
      break;
  }
}

const Colors = ['#e6b251', '#4e91e6'];
//const Words = ['pasión', 'entusiasmo', 'compromiso', 'seriedad'];
const Words = ['pasión', 'compromiso'];
//const Banners = ['deLaFabrica', 'deLaFabrica1', 'deLaFabrica2'];
let reset = (limit, i) => {
  i += 1;
  if (i == limit) i = 0;
  return i;
};

window.addEventListener('load', function () {
  //changeBannerBackground(Banners);
  changeWord(Words);
  underline();
});

// function changeBannerBackground(Banners) {
//   let i = 0;
//   setInterval(function () {
//     document.getElementById('presentacion').style.backgroundImage = `url(
//       ../images/fotosfabrica/${Banners[i]}.jpg
//     )`;
//     i = reset(Banners.length, i);
//   }, 4000);
// }
function changeLogoBackground(Colors) {
  let i = 0;
  setInterval(function () {
    document.getElementById('logo2Container').style.background = Colors[i];
    i = reset(Colors.length, i);
  }, 2500);
}

function changeWord(Words) {
  let i = 0;
  let a = true;
  var word = document.getElementById('word');
  setInterval(function () {
    word.classList.add('transparent');
    setTimeout(function () {
      i = reset(Words.length, i);
      a = !a;
      word.innerHTML = Words[i];
      word.classList.remove('transparent');
    }, 1000);
  }, 2000);
}

function underline() {
  setTimeout(function () {
    document.getElementById('bannerText').classList.add('underline');
  }, 2900);
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'cards',
  grabCursor: true,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
