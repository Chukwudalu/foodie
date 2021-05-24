import './mealcard.scss'
import { useHistory } from 'react-router-dom'
import { popUp } from '../../animations'
import {motion} from 'framer-motion'

function MealCard({ id, name, img }) {
    const history = useHistory()
    const handleClick = () => {
        history.push(`/${id}`)
    }
    
    return (
        <motion.div className='meal' onClick={handleClick} variants={popUp} initial='hidden' animate='show'>
            <img src={img} alt='meal'/>
            <div className='text'>
                <p>{name && name}</p>
            </div>
        </motion.div>

    
    )
}

export default MealCard
