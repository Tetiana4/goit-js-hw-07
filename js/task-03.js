const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const items = [];

for (let image of images) {
  items.push(`<li><img src="${image.url}" alt="${image.alt}"></li>`);
};
  
  document.querySelector('ul').insertAdjacentHTML('beforeEnd',  [...items].join(''));
    
  // не надо искать по квериселекетору и добавлять в дом на каждую итерацию цикла, в цикле собираем строки, после цикла ищем елемент и один раз добавляем.

