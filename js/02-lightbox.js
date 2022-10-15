import { galleryItems } from "./gallery-items.js";

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
                  <a class="gallery__item" href="${original}">
                      <img
                          class="gallery__image"
                          src="${preview}"
                          alt="${description}"
                      />
                  </a>
              `;
    })
    .join("");
}

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.close();
  }
});
