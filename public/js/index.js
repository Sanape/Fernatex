function enroll() {
  window.scrollBy({
    top: 800,
    left: 0,
    behavior: 'smooth',
  });
}

const Colors = ['#e6b251', '#4e91e6'];
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
  let a = true;
  var word = document.getElementById('word');
  setInterval(function () {
    word.classList.add('transparent');
    setTimeout(function () {
      i = reset(Words.length, i);
      a = !a;
      word.innerHTML = Words[i];
      word.style.color = Colors[a ? 0 : 1];
      word.classList.remove('transparent');
    }, 1000);
  }, 2000);
}

function underline() {
  setTimeout(function () {
    document.getElementById('bannerText').classList.add('underline');
  }, 2900);
}
