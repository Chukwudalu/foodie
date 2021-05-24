import './header.scss'
import { useState} from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
import { loadMealByName } from '../../actions/mealAction'
import {useHistory} from 'react-router-dom'

function Header() {
    const [text, setText] = useState('');
    const [sidebar, setSideBar] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    const nav = document.querySelector('.nav-menu')
    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(loadMealByName(text))
        history.push('/searched')
        setText('')
    }

    console.log(nav)
    

    
    const showSidebar = () => setSideBar(!sidebar)
    
    return (
        <div className='header'>
            <h2 className='title'><Link to='/'>Foodie</Link></h2>
            <div className='header-search'>
                <SearchIcon/>
                <form onSubmit={HandleSubmit}>
                    <input className='header-input' type='text' placeholder='Search over 1000 meals'
                        value={text} onChange={(e) => { setText(e.target.value) }} />
                </form> 
            </div>
            <FaIcons.FaBars onClick={showSidebar} className='menu-bar'/>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li>
                        <Link to='/beef' className='cat-link' onClick={showSidebar}>Beef</Link>
                    </li>
                    <li>
                        <Link to='/chicken' className='cat-link' onClick={showSidebar}>Chicken</Link>
                    </li>
                    <li>
                        <Link to='/dessert' className='cat-link' onClick={showSidebar}>Dessert</Link>
                    </li>
                    <li>
                        <Link to='/seafood' className='cat-link' onClick={showSidebar}>Sea Food</Link>
                    </li>
                    
                    <li>
                        <Link to='/latest' className='cat-link' onClick={showSidebar}>Latest</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
