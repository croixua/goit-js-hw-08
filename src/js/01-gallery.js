import galleryItems from './gallery-items.json';
import imageCards from '../templates/image-cards.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const itemsGallaryMarkup = createGallaryItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemsGallaryMarkup);

function createGallaryItemsMarkup(galleryItems) {
  return imageCards(galleryItems);
}

new SimpleLightbox('.gallery a');
