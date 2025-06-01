'use-strict';

/////////////////////////////////////////////////////////////////
// Imports:
import { forkifyAPI, resultsPerPage, APIKey } from './config';
import { APIAgent } from './helpers';

/////////////////////////////////////////////////////////////////
// All Data:
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: resultsPerPage,
    page: 1,
  },
  bookmarks: [],
};

/////////////////////////////////////////////////////////////////
// Create recipe object:
const createRecipeObj = function (recipe) {
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceURL: recipe.source_url,
    image: recipe.image_url.replace('http://', 'https://'),
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key ? { key: recipe.key } : {}),
  };
};

/////////////////////////////////////////////////////////////////
// Load Recipe:
export const loadRecipe = async function (id) {
  try {
    // Get data:
    const data = await APIAgent(`${forkifyAPI}${id}?key=${APIKey}`);

    // Formatting:
    state.recipe = createRecipeObj(data.data.recipe);

    // Set bookmark:
    if (state.bookmarks.some((bookmark) => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    // Error handling:
  } catch (err) {
    throw err;
  }
};

/////////////////////////////////////////////////////////////////
// Search Logic:
export const loadSearchResults = async function (query) {
  try {
    // Save query for reference:
    state.search.query = query;

    // Get data:
    const data = await APIAgent(`${forkifyAPI}?search=${query}?key=${APIKey}`);

    // Formatting:
    state.search.results = data.data.recipes.map(createRecipeObj);

    // Error handling:
  } catch (err) {
    throw err;
  }
};

// Return results by page number:
export const getSearchResultsByPage = function (page = state.search.page) {
  // set page number:
  state.search.page = page;

  // Get results by "results per page":
  const start = (page - 1) * resultsPerPage;
  const end = page * resultsPerPage;

  // Return new array:
  return state.search.results.slice(start, end);
};

/////////////////////////////////////////////////////////////////
// Change state for new serving size.
export const updateServings = function (inc) {
  // Guard:
  if ((inc === -1) & (state.recipe.servings === 1)) return;

  // Set new serving size:
  const newServing = state.recipe.servings + inc;

  // Change serving in state data:
  state.recipe.ingredients.forEach(
    (ing) => (ing.quantity = (ing.quantity / state.recipe.servings) * newServing)
  );

  // Return new serving size
  state.recipe.servings = newServing;
};

/////////////////////////////////////////////////////////////////
// Bookmarks logic:

// Add bookmark
export const addBookmark = function (recipe) {
  // Add to state:
  state.bookmarks.push(recipe);

  // Mark current recipe in as bookmarked:
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  // Save to local storage:
  storeBookmarks();
};

// Remove bookmark
export const removeBookmark = function (id) {
  // remove from state:
  const index = state.bookmarks.findIndex((el) => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe in as bookmarked:
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  // Save to local storage:
  storeBookmarks();
};

// Insert to local storage:
const storeBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

// fetch from local storage:
export const getBookmarks = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

export const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};

/////////////////////////////////////////////////////////////////
// Upload a new Recipe:
export const uploadRecipe = async function (recipeArr) {
  try {
    // Turn the form to usable arr/obj:
    const recipeObj = Object.fromEntries(recipeArr);
    const ingredients = recipeArr
      .filter((entry) => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(function (ing) {
        const ingArr = ing[1].split(',').map((ing) => ing.trim());

        // Guard:
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format :)'
          );

        // Return data:
        const [quantity, unit, description] = ingArr;
        return { quantity, unit, description };
      });

    // Make recipe object ready for post request:
    const recipe = {
      title: recipeObj.title,
      publisher: recipeObj.publisher,
      source_url: recipeObj.sourceUrl,
      image_url: recipeObj.image,
      servings: +recipeObj.servings,
      cooking_time: +recipeObj.cookingTime,
      ingredients,
    };

    // Send data to API:
    const data = await APIAgent(`${forkifyAPI}?key=${APIKey}`, recipe);
    state.recipe = createRecipeObj(data.data.recipe);

    // Render Data:
    addBookmark(state.recipe);

    // Error handling:
  } catch (err) {
    throw err;
  }
};

/////////////////////////////////////////////////////////////////
