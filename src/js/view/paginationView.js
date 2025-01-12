'use-strict';

/////////////////////////////////////////////////////////////////
// Addons import:
import icons from 'url:../../img/icons.svg';
import View from './view';

/////////////////////////////////////////////////////////////////
// Pagination View class:
class PaginationView extends View {
  // Private declarations:
  _perentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._perentElement.addEventListener('click', function (e) {
      // Select Button:
      const btn = e.target.closest('.btn--inline');

      //Gaurd:
      if (!btn) return;

      // Apply change in page:
      if (btn.classList.contains('pagination__btn--prev')) return handler(-1);
      if (btn.classList.contains('pagination__btn--next')) return handler(1);
    });
  }

  _generateMarkup() {
    const sumPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;

    // On page 1 and there is more pages:
    if (currentPage === 1 && sumPages > 1) {
      return this._generateNextBTN(currentPage);
    }

    // On page 1 and there isen't any more pages:
    if (currentPage === 1 && sumPages === 1) {
      return '';
    }

    // On the last page:
    if (currentPage === sumPages && sumPages > 1) {
      return this._generatePreviousBTN(currentPage);
    }

    // Any other page in the middle:
    if (currentPage > 1 && currentPage < sumPages) {
      return (
        this._generateNextBTN(currentPage) + this._generatePreviousBTN(currentPage)
      );
    }
  }

  _generatePreviousBTN(page) {
    return `
    <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>${page - 1}</span>
    </button>
    `;
  }

  _generateNextBTN(page) {
    return `
    <button class="btn--inline pagination__btn--next">
        <span>${page + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    `;
  }
}
export default new PaginationView();

/////////////////////////////////////////////////////////////////
