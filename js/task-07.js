let fontInput = document.querySelector('#font-size-control');

let text = document.querySelector('span');

fontInput.oninput = function() {
  text.style.fontSize = fontInput.value + 'px';
};