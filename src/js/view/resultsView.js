'use-strict';

/////////////////////////////////////////////////////////////////
// Addons import:
import PreviewView from './previewView';

/////////////////////////////////////////////////////////////////
// ResultsView class:
class ResultsView extends PreviewView {
  // Private declarations:
  _perentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found!';
  _message = '';

  // Generate HTML markup for DOM insert:
  _generateMarkup() {
    return this._data.map(this._generateMarkupPriview).join('');
  }
}
export default new ResultsView();

/////////////////////////////////////////////////////////////////
