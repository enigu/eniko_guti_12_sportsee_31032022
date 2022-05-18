import yoga from  '../../assets/yoga.svg'
import swim from  '../../assets/swim.svg'
import bike from  '../../assets/bike.svg'
import weight from  '../../assets/weight.svg'
import '../../components/Sidebar/Sidebar.css'

/**
 * @description Component Sidebar showing 4 icons
 * @returns {React.ReactElement}
 */

function Sidebar() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    return(
        <div className="sidebar-wrapper">
            <nav className='icon-wrapper'>
                <img src={yoga} alt="yoga icon" className="yoga-icon" />
                <img src={swim} alt="swim icon" className="swim-icon" />
                <img src={bike} alt="bike icon" className="bike-icon" />
                <img src={weight} alt="weight icon" className="weight-icon" />
            </nav>
            <p>Copyright, Sportsee {year}</p>
        </div>
    )
}
export default Sidebar