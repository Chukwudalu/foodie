import './details.scss'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { loadMealById } from '../../actions/mealAction'
import ReactLoading from 'react-loading'

function Details() {
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.pathname.split('/')[1];
    useEffect(() => {
        dispatch(loadMealById(id))
    }, [dispatch])
    const details = useSelector((state) => state.meals.mealDetails)
    // const detail = details[0]
    const { strMeal, strCategory, strInstructions, strMealThumb,
        strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
        strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10} = details
    
    return (

        <>
            {Object.keys(details).length==0?<ReactLoading type={'bars'} color={'#bb3e03'} height={100} weight={100} className='loader'/>:(
                <div className='details'>
                <div className='details_left'>
                    <h3>{strMeal}</h3>
                    <img src={strMealThumb} alt='image' />
                    <div>
                        <h4>Instructions</h4>
                        <p>{strInstructions}</p>
                    </div>
                </div>
                <div className='details_right'>
                    <h4>Ingredients</h4>
                    <p>{strIngredient1}</p>
                    <p>{strIngredient2}</p>
                    <p>{strIngredient3}</p>
                    <p>{strIngredient4}</p>
                    <p>{strIngredient5}</p>
                    <p>{strIngredient6}</p>
                    <p>{strIngredient7}</p>
                    {/* <p>{strIngredient8}</p>
                    <p>{strIngredient9}</p>
                    <p>{strIngredient10}</p> */}
                </div>
            </div>
            )}
        </>
        
    )
}

export default Details

