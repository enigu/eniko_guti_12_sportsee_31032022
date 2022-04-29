import '../../components/Loader/Loader.css'

function Loader() {
    return(
        <div className='container'>
            <div className="load">
                <div className="load__ball load__ball--1"></div>
                <div className="load__ball load__ball--2"></div>
                <div className="load__ball load__ball--3"></div>
            </div>
        </div>
    )
}
export default Loader