'use-strict';

////////////////////////////////////////////////////////////////
// Addons import:
import View from './view';
import icons from 'url:../../img/icons.svg';

////////////////////////////////////////////////////////////////
// Add Recipe View class:
class AddRecipeView extends View {
  // Private declarations:
  _message = 'Recipe was upload successfully!';
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _btnUpload = document.querySelector('.upload__btn');

  constructor() {
    super();
    this._addHandler();
  }

  // Functions:
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');

    setTimeout(
      function () {
        this.render(' ');
      }.bind(this),
      2500
    );
  }

  uploadRecipe(handler) {
    // Event listener:
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data:
      handler([...new FormData(this)]);
    });
  }

  _addHandler() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
  }

  _generateMarkup() {
    return `
    <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="" required name="title" type="text" />
          <label>URL</label>
          <input value="" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="" required name="image" type="text" />
          <label>Publisher</label>
          <input value="" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value=""
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value=""
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=""
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${icons}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
    `;
  }
}
export default new AddRecipeView();

////////////////////////////////////////////////////////////////
