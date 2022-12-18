const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listGallery = document.querySelector(".gallery");

for (const element of images) {
  const { url, alt } = element;

  listGallery.insertAdjacentHTML(
    "beforeend",
    `<li><img src="${url}", alt="${alt}"</li>`
  );
}

// ----- Стилізація -----

listGallery.style.cssText =
  "display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 0; list-style: none";

const galleryImg = document.querySelectorAll("img");

galleryImg.forEach((elem) => {
  elem.style.cssText =
    "display: block; width: 100%; height: 100%; object-fit: cover";
});
