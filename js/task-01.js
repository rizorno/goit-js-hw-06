const listWithClassItem = document.querySelectorAll("#categories>li.item");

console.log(`Number of categories:`, listWithClassItem.length);

listWithClassItem.forEach(function (element, index, array) {
  const nameTitle = element.firstElementChild.textContent;
  console.log(`Category:`, nameTitle);

  const numberList = element.querySelectorAll("li.item>ul>li");
  console.log(`Elements:`, numberList.length);
});
