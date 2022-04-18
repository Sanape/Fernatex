function enroll() {
  window.scrollBy({
    top: 800,
    left: 0,
    behavior: 'smooth',
  });
}

var Colors = [
  'linear-gradient(164deg, rgba(157,100,81,1) 0%, rgba(215,157,138,1) 40%, rgba(142,76,55,1) 100%)',
  'linear-gradient(164deg, rgba(199,154,87,1) 0%, rgba(232,185,114,1) 40%, rgba(182,131,52,1) 100%)',
  'linear-gradient(164deg, rgba(232,209,67,1) 0%, rgba(245,230,144,1) 40%, rgba(201,184,43,1) 100%);',
];

window.addEventListener('load', function () {
  let i = 0;
  setInterval(function () {
    document.getElementById('logo2Container').style.background = Colors[i];
    i += 1;
    if (i == Colors.length) i = 0;
  }, 2500);
});
