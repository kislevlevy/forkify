'use-strict';

///////////////////////////////////////////////////////////////////
// Addons import:
import icons from 'url:../../img/icons.svg';
import View from './view';

///////////////////////////////////////////////////////////////////
// PreviewView class:
export default class PreviewView extends View {
  // Private declarations:
  _perentElement = '';

  // Generate HTML markup preview for DOM insert:
  _generateMarkupPriview(res) {
    const id = window.location.hash.slice(1);
    return `
    <li class="preview">
        <a class="preview__link ${
          res.id === id ? 'preview__link--active' : ''
        }" href="#${res.id}">
            <figure class="preview__fig">
            <img src="${res.image}" alt="${res.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${res.title}</h4>
                <p class="preview__publisher">${res.publisher}</p>
                <div class="recipe__user-generated ${res.key ? '' : 'hidden'}">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
              </div>
            </div>
        </a>
    </li>
    `;
  }
}

///////////////////////////////////////////////////////////////////
