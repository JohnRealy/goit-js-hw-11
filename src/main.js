import { getPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const form = document.querySelector('.form-js');
const gallary = document.querySelector('.gallary');
form.addEventListener('submit', handleSubmit);

let page = 1;

function handleSubmit(e) {
  e.preventDefault();
  const searchQuery = e.target.elements.input.value.trim();
  if (searchQuery.length === 0) {
    return alert('Pusto');
  }

  getPhotos(searchQuery, page).then(res => {
    if (res.hits.length === 0) {
      gallary.innerHTML = '';
      return alert(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    gallary.insertAdjacentHTML('beforeend', createMarkup(res.hits));
  });
}
