import './style.css';
import { NavLink } from 'react-router-dom';

const ButtonForm = ({btnText, link}) => {
    return (
        <NavLink to={link}>
            <div className="container-1">
                <div className="btn btn-one">
                    {btnText}
                </div>
            </div>
        </NavLink>
        
    );
}
 
export default ButtonForm;