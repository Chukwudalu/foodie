import axios from 'axios'
import { getBeefMeals, getByName, getById, getChickenMeals, getDessertMeals, getLatestMeals, getRandomMeals, getSeafoodMeals } from '../api'

export const loadMeals = () => async (dispatch) => {

    const beefMeals = await axios.get(getBeefMeals());
    const chickenMeals = await axios.get(getChickenMeals());
    const dessertMeals = await axios.get(getDessertMeals());
    const latestMeals = await axios.get(getLatestMeals());
    const randomMeals = await axios.get(getRandomMeals());
    const seafoodMeals = await axios.get(getSeafoodMeals());

    dispatch({
        type: 'GET_MEALS',
        payload: {
            beefMeals: beefMeals.data.meals,
            chickenMeals: chickenMeals.data.meals,
            dessertMeals: dessertMeals.data.meals,
            latestMeals: latestMeals.data.meals,
            randomMeals: randomMeals.data.meals,
            seafoodMeals: seafoodMeals.data.meals
        }
    })
}

export const loadMealByName = (name) => async (dispatch) => {
    const searchedMeal = await axios.get(getByName(name));
    dispatch({
        type: 'GET_SEARCHED_MEAL',
        payload: {
            searchedMeal: searchedMeal.data.meals
        }
    })
}

export const loadMealById = (id) => async (dispatch) => {
    const mealDetails = await axios.get(getById(id));
    dispatch({
        type: 'GET_DETAILS_BY_ID',
        payload: {
            mealDetails: mealDetails.data.meals[0]
        }
    })
}
