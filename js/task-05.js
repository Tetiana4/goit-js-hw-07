let input = document.querySelector('input');
let nameOutput = document.querySelector('span');

input.oninput = function () {
    if (input.value === '') {
       nameOutput.innerHTML = 'незнакомец';
    } else{
    nameOutput.innerHTML = input.value;
    }
}