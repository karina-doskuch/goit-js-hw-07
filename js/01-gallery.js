import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const basicLightbox = window.basicLightbox;

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
            `;
    })
    .join("");
}

const galleryRef = document.querySelector("div.gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryRef.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const url = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
        <img src="${url}">
        `
  );
  instance.show();
  console.log(url);

  document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape')  instance.close()
  });
}
