'use-strict';

///////////////////////////////////////////////////////////////////
// Addons import:
import icons from 'url:../../img/icons.svg';

///////////////////////////////////////////////////////////////////
// View class:
export default class View {
  // Private declarations:
  _data;

  // Render recipe in perent element:
  render(data) {
    // Guard
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    // Handel data:
    this._data = data;
    const html = this._generateMarkup();

    // To the DOM:
    this._ToDOM(html);
  }

  update(data) {
    // Handel data + generate new markup:
    this._data = data;
    const html = this._generateMarkup();

    // Create current and new markup for compare oporation:
    const newDOM = document.createRange().createContextualFragment(html);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const currentElements = Array.from(
      this._perentElement.querySelectorAll('*')
    );

    // Compare and change only diffrent elements:
    newElements.forEach(function (newEle, i) {
      const curEle = currentElements[i];

      // Change text:
      if (
        !newEle.isEqualNode(curEle) &&
        newEle.firstChild?.nodeValue.trim() !== ''
      ) {
        curEle.textContent = newEle.textContent;
      }

      // Change attrebiuts:
      if (!newEle.isEqualNode(curEle)) {
        Array.from(newEle.attributes).forEach(attr =>
          curEle.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  // Clear perent element:
  _clear() {
    this._perentElement.innerHTML = '';
  }

  // Insert to DOM:
  _ToDOM(data) {
    this._clear();
    this._perentElement.insertAdjacentHTML('afterbegin', data);
  }

  // Render spinner:
  renderSpinner() {
    const html = `
    <div class="spinner">
        <svg>
            <use href="${icons}#icon-loader"></use>
        </svg>
    </div>
    `;
    this._ToDOM(html);
  }

  // Render error to view (with custom message):
  renderError(message = this._errorMessage) {
    const html = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
      `;
    this._ToDOM(html);
  }

  // Render a message to view:
  renderMessage(message = this._message) {
    const html = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
      `;
    this._ToDOM(html);
  }
}

///////////////////////////////////////////////////////////////////
