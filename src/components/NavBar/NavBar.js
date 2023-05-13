import { NavLink } from 'react-router-dom';
import './style.css'

const NavBar = () => {
    return ( 
        <nav className="nav"> 
            <div className="container">

                    <div className='nav-home-logo'>
                    <NavLink to="/"><img src="https://reflect.app/home/build/q-7110c4a0.png" alt="Logo" className="logo"></img></NavLink>
                    <div className='logoText'><NavLink to="/">Reflect</NavLink></div>
                    </div>

                    <ul className="nav-list">
                        <li className="nav-list__item">Product</li>
                        <li className="nav-list__item">Pricing</li>
                        <li className="nav-list__item">Company</li>
                        <li className="nav-list__item">Blog</li>
                        <li className="nav-list__item">Changelog</li>
                    </ul>
                    <div className='nav-actions'>
                        <li className='nav-actions-login'><NavLink to="/">Login</NavLink></li>
                        <li className='nav-actions-button'><NavLink to="/registration">Start free trial</NavLink></li>
                    </div>
            </div>
            <div className='nav-line'></div>    
        </nav>
     );
}
 
export default NavBar;