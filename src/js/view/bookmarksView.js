'use-strict';

///////////////////////////////////////////////////////////////////
// Addons import:
import icons from 'url:../../img/icons.svg';
import PreviewView from './previewView';

///////////////////////////////////////////////////////////////////
// BookmarksView class:
class BookmarksView extends PreviewView {
  // Private declarations:
  _perentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';

  // Generate HTML markup for DOM insert:
  _generateMarkup() {
    return this._data.map(this._generateMarkupPriview).join('');
  }
}
export default new BookmarksView();

///////////////////////////////////////////////////////////////////
