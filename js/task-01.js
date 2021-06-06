const listEl = document.querySelectorAll('#categories>li');
console.log(`В списке ${listEl.length} категории`);

const totalCountCategories = listEl;
const ArrayCategories = [...totalCountCategories];

ArrayCategories.map(category => {
    console.log(`Категория: ${category.firstElementChild.textContent}`);
    console.log(`Количество елементов: ${category.lastElementChild.children.length}`);
})





