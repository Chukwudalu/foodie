const api_key = 9973533

const base_url = `https://www.themealdb.com/api/json/v2/${api_key}`

export const getRandomMeals = () => (`${base_url}/randomselection.php`);

// get seafood
export const getSeafoodMeals = () => (`${base_url}/filter.php?c=Seafood`);

// get Beef
export const getBeefMeals = () => (`${base_url}/filter.php?c=Beef`);

// get Chicken
export const getChickenMeals = () => (`${base_url}/filter.php?c=Chicken`);

// get dessert
export const getDessertMeals = () => (`${base_url}/filter.php?c=Dessert`);

// get latest meals
export const getLatestMeals = () => (`${base_url}/latest.php`);

// get by name
export const getByName = (name) => (`${base_url}/search.php?s=${name}`);

// get by Id
export const getById = (id) => (`${base_url}/lookup.php?i=${id}`);





