import express from 'express';
import axios from 'axios';

console.log('recipe.js loaded');

import Recipe from '../models/Recipe.js';

const router = express.Router();

/*
=========================================
PART 1 - NO CACHE
=========================================

This version ALWAYS calls the API.

Every time a user searches for:

/recipes?searchQuery=chicken

A brand-new request is sent to TheMealDB.

This is easier to understand when first
learning APIs.
*/

router.get('/recipes', getRecipes);

async function getRecipes(request, response) {

  // Read the search term from the URL
  const searchQuery = request.query.searchQuery;

  console.log(`Searching for: ${searchQuery}`);

  /*
  Build the API URL

  Example:

  https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
  */

  const url =
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;

  // Send request to TheMealDB
  const apiResponse = await axios.get(url);

  /*
  TheMealDB returns:

  {
    meals: [...]
  }

  OR

  {
    meals: null
  }

  If no recipes are found.
  */

  const meals = apiResponse.data.meals || [];

  /*
  Convert raw API data into Recipe objects.

  This gives our frontend a predictable
  structure every time.
  */

  const recipes = meals.map(
    meal => new Recipe(meal)
  );

  // Send results back to the frontend
  response.status(200).json(recipes);
}


export default router;