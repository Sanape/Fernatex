function enroll() {
  window.scrollBy({
    top: 800,
    left: 0,
    behavior: 'smooth',
  });
}

const Colors = [
  'linear-gradient(164deg, rgba(157,100,81,1) 0%, rgba(215,157,138,1) 40%, rgba(142,76,55,1) 100%)',
  'linear-gradient(164deg, rgba(199,154,87,1) 0%, rgba(232,185,114,1) 40%, rgba(182,131,52,1) 100%)',
  'linear-gradient(164deg, rgba(232,209,67,1) 0%, rgba(245,230,144,1) 40%, rgba(201,184,43,1) 100%)',
  'linear-gradient(164deg, rgba(186,186,186,1) 0%, rgba(255,255,255,1) 40%, rgba(159,159,159,1) 100%)',
];
const Words = ['pasión', 'entusiasmo', 'compromiso', 'seriedad'];

let reset = (limit, i) => {
  i += 1;
  if (i == limit) i = 0;
  return i;
};

window.addEventListener('load', function () {
  //changeLogoBackground(Colors);
  changeWord(Words);
  underline();
});

function changeLogoBackground(Colors) {
  let i = 0;
  setInterval(function () {
    document.getElementById('logo2Container').style.background = Colors[i];
    i = reset(Colors.length, i);
  }, 2500);
}

function changeWord(Words) {
  let i = 0;
  var word = document.getElementById('word');
  setInterval(function () {
    word.classList.add('transparent');
    setTimeout(function () {
      i = reset(Words.length, i);
      word.innerHTML = Words[i];
      word.classList.remove('transparent');
    }, 900);
  }, 2000);
}

function underline() {
  setTimeout(function () {
    document.getElementById('bannerText').classList.add('underline');
  }, 2900);
}
