'use-strict';

/////////////////////////////////////////////////////////////////
// JS Import:
import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import resultsView from './view/resultsView.js';
import paginationView from './view/paginationView.js';
import bookmarksView from './view/bookmarksView.js';
import AddRecipeView from './view/addRecipeView.js';
import { closeModleSec } from './config.js';

// Addons Import:
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import addRecipeView from './view/addRecipeView.js';

/////////////////////////////////////////////////////////////////
// Parcel hot change without reload:
if (module.hot) {
  module.hot.accept();
}

/////////////////////////////////////////////////////////////////
// Show recipe:
const controlRecipe = async function () {
  try {
    // Get hash
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Update search list(mark selectd):
    resultsView.update(model.getSearchResultsByPage());
    bookmarksView.update(model.state.bookmarks);

    // Load Recipe:
    recipeView.renderSpinner();
    await model.loadRecipe(id);

    //Rnder Recipe:
    recipeView.render(model.state.recipe);

    // Error catching:
  } catch (err) {
    recipeView.renderError();
    // console.error(err);
  }
};

/////////////////////////////////////////////////////////////////
// Render pagination by page position:
const renderPagination = function (page) {
  // Render to DOM:
  resultsView.render(model.getSearchResultsByPage(page));

  // Render Pagination:
  paginationView.render(model.state.search);
};

// Control pagination on page click buttons:
const controllPagination = function (inc) {
  renderPagination((model.state.search.page += inc));
};

/////////////////////////////////////////////////////////////////
// Fetch search results:
const controlSearchResults = async function () {
  try {
    // Get query:
    const query = searchView.getQuery();
    if (!query) return;

    // Load results:
    resultsView.renderSpinner();
    await model.loadSearchResults(query);

    // Renfer pagination:
    renderPagination(1);

    // Error catching:
  } catch (err) {
    recipeView.renderError();
  }
};

/////////////////////////////////////////////////////////////////
// Controll servings + update renderd data:
const controllServings = function (inc) {
  // Update servings size in model state:
  model.updateServings(inc);

  //Update Recipe:
  recipeView.update(model.state.recipe);
};

/////////////////////////////////////////////////////////////////
// Add Bookmark:
const controlAddBookmark = function () {
  // Set bookmarks:
  if (model.state.recipe.bookmarked) model.removeBookmark(model.state.recipe.id);
  else model.addBookmark(model.state.recipe);

  // Update view
  recipeView.update(model.state.recipe);
  bookmarksView.render(model.state.bookmarks);
};

/////////////////////////////////////////////////////////////////
// Add Recipe:
const controlAddRecipe = async function (newRecipe) {
  try {
    // Show spinner:
    addRecipeView.renderSpinner();

    // Upload recipe to API:
    await model.uploadRecipe(newRecipe);

    // Render recipe:
    recipeView.render(model.state.recipe);
    bookmarksView.render(model.state.bookmarks);

    // Display message:
    addRecipeView.renderMessage();

    // Close form model:
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, closeModleSec * 1000);

    // Change hash in window
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Error handeling:
  } catch (err) {
    // console.error(err)
    addRecipeView.renderError(err.message);
  }
};

/////////////////////////////////////////////////////////////////
// Initialization
const init = function () {
  // Evnet handlers:
  recipeView.addHandlerRender(controlRecipe, controllServings, controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controllPagination);
  AddRecipeView.uploadRecipe(controlAddRecipe);

  // Fetch bookmarks:
  model.getBookmarks();
  bookmarksView.render(model.state.bookmarks);
};
init();

/////////////////////////////////////////////////////////////////
// Clear bookmarks:
// model.clearBookmarks();
