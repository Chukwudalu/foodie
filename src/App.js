import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMeals } from './actions/mealAction'
import Header from './components/header/header'
import Category from './components/category/category'
import SideBar from './components/sidebar/sidebar'
import ReactLoading from 'react-loading'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Details from './components/details/details'

function App() {
  
  
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(loadMeals())
  }, [dispatch])
  const { beefMeals, chickenMeals, dessertMeals, latestMeals, randomMeals, seafoodMeals, searchedMeal } = useSelector((state) => state.meals)
  return (
    <>
      {!beefMeals.length ? <ReactLoading type={'bars'} color={'#bb3e03'} height={100} weight={100} className='loader'/> : (
        <div className="App">
        {/* Header */}
        <Header />
        
        <div className='app_body'>
          {/* SideBar */}
            <SideBar/>
          <Switch>
            <Route exact path='/searched' >
              {searchedMeal==null ? (
                <div class='not-found'>
                  <h3 className='notfound-h3'>Not Found</h3>
                  <i class="far fa-frown frown fa-10x"></i>
                </div>) : (
                <Category meals={searchedMeal} category_name='Searched'/>
              )}
              </Route>
              <Route exact path='/' >
                <Category meals={randomMeals} category_name='Trending'/>
              </Route>
              <Route  path='/beef' >
                <Category meals={beefMeals} category_name='Beef'/>
              </Route>
              <Route  path='/chicken' >
                <Category meals={chickenMeals} category_name='Chicken'/>
              </Route>
              <Route  path='/dessert' >
                <Category meals={dessertMeals} category_name='Dessert'/>
              </Route>
              <Route  path='/latest' >
                <Category meals={latestMeals} category_name='Latest'/>
              </Route>
              <Route  path='/seafood' >
                <Category meals={seafoodMeals} category_name='Sea Food'/>
              </Route>
              {/* Details */}
              <Route path='/:id' component={Details}/>
            </Switch>
        </div>
        
          
      </div>
      )}
      
    </>
    
  );
}

export default App;
