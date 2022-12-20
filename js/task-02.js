const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
const list = [];

for (const element of ingredients) {
  const elementItem = document.createElement("li");
  elementItem.textContent = element;
  elementItem.classList.add("item");
  list.push(elementItem);
}
listIngredients.append(...list);
