

function Welcome({firstName}) {
    return (
        <div className='welcome'>
            <h1>
                Bonjour
                <span>{' ' + firstName}</span>
            </h1>
            <p> Félicitations, vous avez explosé vos objectifs hier </p>

        </div>
    )

}
export default Welcome