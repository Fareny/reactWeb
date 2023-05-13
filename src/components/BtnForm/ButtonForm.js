import './style.css'

const ButtonForm = ({btnText}) => {
    return (
        <div className="container-1">
            <div className="btn btn-one">
                <span>{btnText}</span>
            </div>
        </div>
    );
}
 
export default ButtonForm;