// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const itemsGallaryMarkup = createGallaryItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemsGallaryMarkup);

function createGallaryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview: previewLinkImg, original: originalLinkImg, description }) => {
      return `
        <a class="gallery__item" href="${originalLinkImg}">
            <img class="gallery__image" src="${previewLinkImg}" alt="${description}" />
        </a>
        `;
    })
    .join('');
}

new SimpleLightbox('.gallery a');
