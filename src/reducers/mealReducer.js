const initialState = {
    beefMeals: [],
    chickenMeals: [],
    dessertMeals: [],
    latestMeals: [],
    randomMeals: [],
    seafoodMeals: [],
    searchedMeal: [],
    mealDetails: []
}

const mealReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_MEALS':
            return {
                ...state,
                beefMeals: action.payload.beefMeals,
                chickenMeals: action.payload.chickenMeals,
                dessertMeals: action.payload.dessertMeals,
                latestMeals: action.payload.latestMeals,
                randomMeals: action.payload.randomMeals,
                seafoodMeals: action.payload.seafoodMeals
            }
        
        case 'GET_SEARCHED_MEAL':
            return {
                ...state,
                searchedMeal: action.payload.searchedMeal
            }
        case 'GET_DETAILS_BY_ID':
            return {
                ...state,
                mealDetails: action.payload.mealDetails
            }
        default:
            return {...state}
    }
}

export default mealReducer