import './category.scss'
import MealCard from '../../components/mealcard/mealcard'

function Category({ meals, category_name }) {
    
    return (
        <section className='container'>
            <h2>{category_name}</h2>
            <div className='allmeals'>
                {meals &&(
                    meals.map(({idMeal, strMealThumb, strMeal}) =>
                        <MealCard key={idMeal} id={idMeal} img={strMealThumb} name={strMeal}/>)
                )}
            </div>
        </section>
        
    )
}

export default Category