  
"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
 const ulList = document.querySelector("#ingredients"); 
const elements = ingredients.map(ingredient => {
  const items = document.createElement("li");    
  items.textContent = ingredient;
  return items;
});
ulList.append(...elements);
