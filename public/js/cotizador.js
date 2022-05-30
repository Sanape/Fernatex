const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .prev-btn');
const form = document.querySelector('form');
var estampa = '';
const SelectEstampado = document.getElementById('tipoEstampado');
const Table = document.getElementById('tableEstampados');

const AnimalImages = [
  'animal/11.020.svg',
  'animal/11.063.svg',
  'animal/11.199.svg',
  'animal/11.219.Kitten.svg',
  'animal/11.279.Animal.svg',
  'animal/11.285.Constanza.svg',
  'animal/11.316.svg',
  'animal/11.326.Hanna.svg',
  'animal/11.400.svg',
  'animal/30.779.svg',
];
const InfantilImages = [
  'infantil/1.jpg',
  'infantil/2.jpg',
  'infantil/3.jpg',
  'infantil/4.jpg',
  'infantil/5.jpg',
  'infantil/6.jpg',
  'infantil/7.jpg',
  'infantil/8.jpg',
  'infantil/9.jpg',
  'infantil/10.jpg',
  'infantil/11.jpg',
];
const RayadosImages = [
  'rayados/1.jpg',
  'rayados/2.jpg',
  'rayados/3.jpg',
  'rayados/4.jpg',
];

SelectEstampado.addEventListener('click', (e) => {
  switch (SelectEstampado.value) {
    case 'all':
      loadTable();
      break;
    case 'Animal':
      loadTable(AnimalImages);
      break;
    case 'Infantil':
      loadTable(InfantilImages);
      break;
    case 'Rayados':
      loadTable(RayadosImages);
      break;
  }
});

const selectImage = (img) => {
  estampa = img;
  document.getElementById('estampadoPersonalizado').classList.add('hidden');
  document.getElementById('estampado').classList.remove('hidden');
};

function loadTable(images) {
  while (Table.firstChild) {
    Table.removeChild(Table.lastChild);
  }
  if (images) {
    for (let i = 0; i < images.length; i++) {
      var img = document.createElement('div');
      img.style.backgroundImage = `url(images/estampados/${images[i]})`;
      img.addEventListener(
        'click',
        selectImage(`images/estampados/${images[i]}`)
      );
      Table.appendChild(img);
    }
  } else {
    let imgs = [...RayadosImages, ...InfantilImages, ...AnimalImages];
    for (let i = 0; i < imgs.length; i++) {
      var img = document.createElement('div');
      img.style.backgroundImage = `url(images/estampados/${imgs[i]})`;
      img.addEventListener(
        'click',
        selectImage(`images/estampados/${imgs[i]}`)
      );
      Table.appendChild(img);
    }
  }
}

nextBtn.forEach((button) => {
  switch (button.id) {
    case 'nextstep1':
      switch (SelectEstampado.value) {
        case 'all':
          loadTable();
          break;
        case 'Animal':
          loadTable(AnimalImages);
          break;
        case 'Infantil':
          loadTable(InfantilImages);
          break;
        case 'Rayados':
          loadTable(RayadosImages);
          break;
      }
      break;
    case 'nextstep2':
      break;
  }
  button.addEventListener('click', (e) => {
    changeStep('next');
  });
});

prevBtn.forEach((button) => {
  button.addEventListener('click', () => {
    changeStep('prev');
  });
});

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
