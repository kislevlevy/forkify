'use-strict';

///////////////////////////////////////////////////////////////////
// Addons import:
import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
import View from './view';

///////////////////////////////////////////////////////////////////
// RecipeView class:
class RecipeView extends View {
  // Private declarations:
  _perentElement = document.querySelector('.recipe');
  _errorMessage = 'We could not find that recipe. Please try a different one.';
  _message = 'Start by searching for a recipe or an ingredient. Have fun!';

  // Event handler function:
  addHandlerRender(loadRecipe, servings, bookmark) {
    // Listen to Hash-Change & Load event:
    ['hashchange', 'load'].forEach(e => window.addEventListener(e, loadRecipe));

    // Listen for click on servings change:
    this._perentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--tiny');
      if (!btn) return;

      // Update recipe in model.state:
      if (btn.classList.contains('btn--increase-servings')) return servings(1);
      if (btn.classList.contains('btn--decrease-servings')) return servings(-1);
    });

    // Listen for bookmark click:
    this._perentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      bookmark();
    });
  }

  // Generate HTML markup for DOM insert:
  _generateMarkup() {
    return `
    <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${
      this._data.title
    }" class="recipe__img"/>
        <h1 class="recipe__title">
            <span>${this._data.title}</span>
        </h1>
    </figure>

    <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${
              this._data.cookingTime
            } </span>
            <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${
              this._data.servings
            }</span>
            <span class="recipe__info-text">servings</span>
        <div class="recipe__info-buttons">
            <button class="btn--tiny btn--decrease-servings">
                <svg>
                    <use href="${icons}#icon-minus-circle"></use>
                </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
                <svg>
                    <use href="${icons}#icon-plus-circle"></use>
                </svg>
            </button>
        </div>
    </div>
    <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
        <button class="btn--round btn--bookmark">
            <svg class="">
                <use href="${icons}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>
            </svg>
        </button>
    </div>

    <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
    ${this._data.ingredients
      .map(this._getIngredientMarkup.bind(this))
      .join(' ')}
        </ul>
    </div>

    <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
              this._data.publisher
            }</span>. Please check out
            directions at their website.
        </p>
        <a
        class="btn--small recipe__btn"
        href="${this._data.sourceURL}"
        target="_blank"
        >
            <span>Directions</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </a>
    </div>
`;
  }

  // Generate HTML markup for Ingredient:
  _getIngredientMarkup(ing) {
    return `
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
        </svg>
        ${
          ing.quantity
            ? `<div class="recipe__quantity">${this._getIngredientQuantity(
                ing.quantity
              )}</div>`
            : ''
        }
        ${
          ing.unit
            ? ` <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
                </div>`
            : ` <div class="recipe__description">${ing.description.trim()}</div>`
        }
    </li>
            `;
  }

  _getIngredientQuantity(num) {
    const decimal = Number((num - Math.floor(num)).toFixed(2));
    if (Math.trunc(num) === num) return num;
    if (decimal === 0.33) return `${Math.trunc(num)} 1/3`;
    if (decimal === 0.66) return `${Math.trunc(num)} 2/3`;
    else return new Fraction(num).toString();
  }
}
export default new RecipeView();

///////////////////////////////////////////////////////////////////

/*

*/

///////////////////////////////////////////////////////////////////
