/*
=========================================
PART 2 - ADD CACHE
=========================================

Now we improve performance.

Instead of calling the API every time,
we first check our cache.

Cache = temporary memory stored inside
our Node server.

Think of cache like a classroom whiteboard.

Student #1 asks:

"Find chicken recipes."

Teacher looks online and writes the
results on the whiteboard.

Student #2 asks the exact same question.

Instead of searching online again,
the teacher simply reads the answer
from the whiteboard.

That whiteboard is our cache.
*/

import cache from '../cache.js';

/*
Replace the original getRecipes()
function with this version.
*/

async function getRecipes(request, response) {

  const searchQuery = request.query.searchQuery;

  /*
  =========================================
  CACHE CHECK
  =========================================

  Before calling the API,
  check if we already have data
  stored for this search.
  */

  const TEN_MINUTES = 1000 * 60 * 10;

  /*
  Breakdown:

  1000 milliseconds = 1 second

  60 seconds = 1 minute

  10 minutes

  Result:

  600,000 milliseconds
  */

  if (
    cache[searchQuery] &&
    Date.now() - cache[searchQuery].timestamp < TEN_MINUTES
  ) {

    /*
    CACHE HIT

    We found data in memory and it is
    less than 10 minutes old.

    Return the cached data immediately.

    No API request needed.
    */

    console.log('CACHE HIT');

    return response
      .status(200)
      .json(cache[searchQuery].data);
  }

  /*
  CACHE MISS

  Either:

  1. No cached data exists

  OR

  2. Cached data is older than 10 minutes

  We must call the API.
  */

  console.log('CACHE MISS');

  const url =
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;

  const apiResponse = await axios.get(url);

  const meals = apiResponse.data.meals || [];

  const recipes = meals.map(
    meal => new Recipe(meal)
  );

  /*
  =========================================
  SAVE TO CACHE
  =========================================

  Save BOTH:

  1. The recipe data
  2. The current time

  Example:

  cache = {

    chicken: {
      data: [...recipes],
      timestamp: 1749500000
    }

  }

  The timestamp lets us determine
  how old the cached data is.
  */

  cache[searchQuery] = {

    data: recipes,

    timestamp: Date.now()

  };

  /*
  Send fresh data back to the client.
  */

  response.status(200).json(recipes);
}

export default router;