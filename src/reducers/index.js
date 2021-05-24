import { combineReducers } from 'redux';
import mealReducer from './mealReducer'


const rootReducer = combineReducers({
    meals: mealReducer
})

export default rootReducer