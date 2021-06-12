// const render = document.querySelector('[data-action="render"]');
// const destroy = document.querySelector('[data-action="destroy"]');
// const boxes = document.getElementById('boxes');
// render.addEventListener("click", getAmount);
// destroy.addEventListener("click", destroyBoxes);

// function getAmount() {
//   let amount = +document.querySelector('#controls input').value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   const basicSize = 30;
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i++) {
//     const size = basicSize + i * 10;
//     const div = document.createElement('div');
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = '';
// }

// function random() {
//   return Math.floor(Math.random() * 256);
// }

const INITIAL_ITEM_SIZE = 30;
const boxDiv = document.getElementById('boxes');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

const itemSize = {
  value: INITIAL_ITEM_SIZE,
  increment() {
    this.value += 10;
  },
  reset() {
    this.value = INITIAL_ITEM_SIZE;
  },
};

function createBoxes() {
  const amount = input.value;
  const items = [];

  for (let i = 0; i < amount; i++) {
    const divItem = document.createElement('div');
    divItem.style.backgroundColor = getRandomColor();
    divItem.style.width = `${itemSize.value}px`;
    divItem.style.height = `${itemSize.value}px`;
    itemSize.increment();
    items.push(divItem);
  }

  boxDiv.append(...items);
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function destroyBoxes() {
  boxDiv.innerHTML = '';
  itemSize.reset();
}

function getRandomColor() {
  const red = getRandom(0, 255);
  const green = getRandom(0, 255);
  const blue = getRandom(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}