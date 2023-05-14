import ButtonForm from "../components/BtnForm/ButtonForm";

const Login = () => {

    return (
        <div className='form-container'>
            <div className="form">
                <h2>Login user:</h2>
                <form>
                    <p>Email: <input /></p>
                    <p>Password: <input /></p>

                    <ButtonForm type='submit' btnText={'Войти'} />
                </form>
            </div>
        </div>
    );

}
export default Login;