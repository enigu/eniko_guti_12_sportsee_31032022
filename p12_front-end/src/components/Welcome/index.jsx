import '../../components/Welcome/Welcome.css'

/**
 * 
 * @param {*} param0 
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