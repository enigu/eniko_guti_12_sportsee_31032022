import '../../components/Welcome/Welcome.css'
import PropTypes from 'prop-types'
/**
 * @description Component Welcome showinf user's firstname
 * @param {Object} propTypes
 * @returns 
 */
function Welcome({userInfos}) {
    
    return (
        <div className='welcome'>
            <h1>
                Bonjour
                <span>{' ' + userInfos.firstName}</span>
            </h1>
            <p> Félicitations! vous avez explosé vos objectifs hier </p>

        </div>
    )

}
export default Welcome

Welcome.propType = {
    userInfos: PropTypes.object.isRequired,
}