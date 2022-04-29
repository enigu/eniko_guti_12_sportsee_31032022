import '../Header/Header.css'
import logo from  '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <div className='header-wrapper'>
            <img src={logo} alt="logo SportSee" className="logo"/>
            <nav className='links-div'>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/User">Profil</NavLink>
                <NavLink to="/Settings">Réglage</NavLink>
                <NavLink to="/Community">Communauté</NavLink>
            </nav>
        </div>
    )
}
export default Header