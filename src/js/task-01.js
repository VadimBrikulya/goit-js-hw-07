
"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log('Он базарит шо',`в списке ${totalCategories.length} категории.`);
console.log('- сИрьезна??');
console.log('- ЕсссесИнаа=)');
const categoriesArray = [...totalCategories]
.map(categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`).join('\n');
console.log(categoriesArray);

