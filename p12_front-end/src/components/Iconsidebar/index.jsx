import calories from  '../../assets/calories-icon.svg'
import protein from  '../../assets/protein-icon.svg'
import carbs from  '../../assets/carbs-icon.svg'
import fat from  '../../assets/fat-icon.svg'
import '../../components/Iconsidebar/Iconsidebar.css'
import PropTypes from 'prop-types'

/**
 * @description component listing calories, proteines, glucides, lipides with an icon and data
 * @param {Object} propTypes 
 * @param {Object} propTypes.caloriesNumber
 * @param {Object} propTypes.proteinNumber
 * @param {Object} propTypes.carbsNumber
 * @param {Object} propTypes.fatNumber
 * @returns {React.ReactElement}
 */
function Iconsidebar({caloriesNumber, proteinNumber, carbsNumber, fatNumber}) {
    return(
        <div className="iconsidebar-wrapper">
            
            <div className='calories-wrapper'>                
                <img src={calories} alt="calories icon" className="calories-icon" />
                <div className='calories-count'>
                    <h2>{caloriesNumber}kCal</h2>
                    <p>Calories</p>
                </div>
            </div>
            <div className='calories-wrapper'>                
                <img src={protein} alt="protein icon" className="protein-icon" />
                <div className='calories-count'>
                    <h2>{proteinNumber}g</h2>
                    <p>Proteines</p>
                </div>
            </div>
            <div className='calories-wrapper'>               
                <img src={carbs} alt="carbs icon" className="carbs-icon" />
                <div className='calories-count'>
                    <h2>{carbsNumber}g</h2>
                    <p>Glucides</p>
                </div>
            </div> 
            <div className='calories-wrapper'>                
                <img src={fat} alt="fat icon" className="fat-icon" />
                <div className='calories-count'>
                    <h2>{fatNumber}g</h2>
                    <p>Lipides</p>
                </div>
            </div> 
             
        </div>
    )
}

Iconsidebar.propTypes = {
    caloriesNumber: PropTypes.number.isRequired,
    proteinNumber: PropTypes.number.isRequired,
    carbsNumber: PropTypes.number.isRequired, 
    fatNumber: PropTypes.number.isRequired,
}

export default Iconsidebar