
let validatorInput = document.querySelector('#validation-input');

let totalLenght = validatorInput.getAttribute('data-length');
let intTotallenght = parseInt(totalLenght, 10);

validatorInput.oninput = function () {
    if (validatorInput.value.length === 0) {
    validatorInput.classList.remove('valid');
    validatorInput.classList.remove('invalid');
  }
  if (validatorInput.value.length === intTotallenght) {
    validatorInput.classList.remove('invalid');
    validatorInput.classList.add('valid');
  }
  if (validatorInput.value.length !== intTotallenght && validatorInput.value.length !== 0) {
    validatorInput.classList.add('invalid');
  }
};