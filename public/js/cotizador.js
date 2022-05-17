const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .prev-btn');
const form = document.querySelector('form');
var estampa = '';

nextBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    changeStep('next');
  });
});

prevBtn.forEach((button) => {
  button.addEventListener('click', () => {
    changeStep('prev');
  });
});

const selectImage = (img) => {
  estampa = img.src;
  document.getElementById('estampadoPersonalizado').classList.add('hidden');
  document.getElementById('estampado').classList.remove('hidden');
};
const selectedFile = () => {
  document.getElementById('estampadoPersonalizado').classList.remove('hidden');
  document.getElementById('estampado').classList.add('hidden');
};
const sendCotizacion = () => {
  const inputs = [];
  form.querySelectorAll('input').forEach((input) => {
    if (input.name != 'estampado personalizado') {
      var { name, value } = input;
      inputs.push({ name, value });
    } else {
      if (input.value != '') estampa = input.value;
    }
  });
  console.log(inputs);
  form.querySelectorAll('select').forEach((input) => {
    let { name, value } = input;
    if (name == 'estampado') value = estampa;
    inputs.push({ name, value });
  });
  console.log(inputs);
};

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector('form .step.active');
  index = steps.indexOf(active);
  steps[index].classList.remove('active');
  if (btn === 'next') {
    index++;
  } else if (btn === 'prev') {
    index--;
  }
  steps[index].classList.add('active');
}
