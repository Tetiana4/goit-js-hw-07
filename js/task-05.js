let input = document.querySelector('input');
let nameOutput = document.querySelector('span');

input.oninput = function () {
    if (input.value.trim() === '') {
       nameOutput.innerHTML = 'незнакомец';
    } else{
    nameOutput.innerHTML = input.value;
    }
}

// При пробелах показываем "незнакомца"