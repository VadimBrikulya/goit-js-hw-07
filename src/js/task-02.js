  
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
    console.log(ulList);
const foodIngredients = [...ingredients].map(ingredient => {
    const items = document.createElement("li");
    ulList.append(items);
}
);

//console.log(foodIngredients)
    
   

//   items.innerHTML = ingredient;
//   ulList.append(items);
//   //parent.append(...items)
// });