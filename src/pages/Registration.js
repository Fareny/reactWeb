import React from 'react'
import '../styles/Registration/style.css'
import ButtonForm from '../components/BtnForm/ButtonForm';

const Registration = () => {

    return (
        <div className='form-container'>
            <div className="form">
                <h2>Register user:</h2>
                <form>
                    <p>Name: <input /></p>
                    <p>Email: <input /></p>
                    <p>Password: <input /></p>
                    <p>Repeat password: <input /></p>

                    <ButtonForm type='submit' btnText={'Отправить'} />
                </form>
            </div>
        </div>
    );
}

export default Registration;