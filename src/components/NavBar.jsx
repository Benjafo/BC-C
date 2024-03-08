import { NavLink } from "react-router-dom"
import Logo from '../assets/bc&c.png'
import './NavBar.css'

const NavBar = () => {

    return (
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/">
                    <img src={Logo} alt="logo" />
                </NavLink>
            </div>
            <div className="navbar-contents">
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => (isActive ? "navbar-active" : 'none')}><p>Home</p></NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => (isActive ? "navbar-active" : 'none')}><p>About</p></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) => (isActive ? "navbar-active" : 'none')}><p>Contact</p></NavLink>
                    </li>
                    <li>
                        <NavLink to="/references" className={({isActive}) => (isActive ? "navbar-active" : 'none')}><p>References</p></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
