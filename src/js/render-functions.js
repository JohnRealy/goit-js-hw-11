export function createMarkup(arr) {
  return arr
    .map(
      item => `<li class="gallary-item">
              <img
                src="${item.previewURL}"
                alt=""
              />
              <ul class="gallary-item-info">
                <li class="info-block">
                  <h5>Likes</h5>
                  <p>${item.likes}</p>
                </li>
                <li class="info-block">
                  <h5>Views</h5>
                  <p>${item.views}</p>
                </li>
                <li class="info-block">
                  <h5>Comments</h5>
                  <p>${item.comments}</p>
                </li>
                <li class="info-block">
                  <h5>Downloads</h5>
                  <p>${item.downloads}</p>
                </li>
              </ul>
            </li>`
    )
    .join('');
}
