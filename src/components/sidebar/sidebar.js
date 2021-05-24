import './sidebar.scss'
import { Link } from 'react-router-dom'
// import HomeIcon from '@material-ui/icons/Home';

function SideBar() {

    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                
                <h2><Link to='/' className='h2link'>Home</Link></h2>

                <h3>Category</h3>
                <Link to='/beef' className='cat-link'>Beef</Link>
                <Link to='/chicken' className='cat-link'>Chicken</Link>
                <Link to='/dessert' className='cat-link'>Dessert</Link>
                <Link to='/seafood' className='cat-link'>Sea Food</Link>
                <Link to='/latest' className='cat-link'>Latest</Link>
            </div>

            {/* <div className='sidebar-bottom'>

            </div> */}
        </div>
    )
}

export default SideBar
