import { NavLink } from 'react-router-dom';
import './style.css'

const NavBar = () => {
    return ( 
        <nav className="nav"> 
            <div className="container">

                <NavLink to="/">
                    <div className='nav-home-logo'>
                        <img src="https://reflect.app/home/build/q-7110c4a0.png" alt="Logo" className="logo" />
                        <h1 className='logoText'>Reflect</h1>
                    </div>
                </NavLink>

                <ul className="nav-list">
                    <li className="nav-list__item">Product</li>
                    <li className="nav-list__item">Pricing</li>
                    <li className="nav-list__item">Company</li>
                    <li className="nav-list__item"><NavLink to="/blog">Blog</NavLink></li>
                    <li className="nav-list__item">Changelog</li>
                </ul>
                <ul className='nav-actions'>
                    <li className='nav-actions-login'><NavLink to="/login">Login</NavLink></li>
                    <li className='nav-actions-button'><NavLink to="/registration">Start free trial</NavLink></li>
                </ul>

            </div>
            <div className='nav-line'></div>    
        </nav>
     );
}
 
export default NavBar;