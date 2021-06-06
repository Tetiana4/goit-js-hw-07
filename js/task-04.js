let value = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const btnDecr = document.querySelector('#counter').firstElementChild;
const btnIncr = document.querySelector('#counter').lastElementChild;

btnIncr.addEventListener('click', event => {
  value += 1;
  counterValue.innerText = value;
});

btnDecr.addEventListener('click', event => {
  value -= 1;
  counterValue.innerText = value;
});