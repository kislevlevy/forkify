'use-strict';

/////////////////////////////////////////////////////////////////
// Search view class:
class SearchView {
  // Private declarations:
  _parentElement = document.querySelector('.search');
  _searchField = document.querySelector('.search__field');

  // Get query from DOM:
  getQuery() {
    const query = this._searchField.value;
    this._clearInput();
    return query;
  }

  // Clear input field in form:
  _clearInput() {
    this._searchField.value = '';
    this._searchField.blur();
  }

  // Event handler function:
  addHandlerSearch(handler) {
    // Listen to Hash-Change & Load event:
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();

/////////////////////////////////////////////////////////////////
