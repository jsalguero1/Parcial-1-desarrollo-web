
import React, { useState} from 'react';
import axios from 'axios';
import './styles/login.css';
import Carros from './carros';
import { FormattedMessage } from 'react-intl';

function Login() {

    // Estados para manejar el login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Estado para manejar errores
    const [error, setError] = useState('');

    // Estado para manejar el estado de autenticación
    const [isLogged, setIsLogged] = useState(false);

    // Función para manejar el login y autenticación con el backend
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        const endpoint = ' http://localhost:3001/login';
        const credentials = { login: username, password: password };

        try {
            const response = await axios.post(endpoint, credentials);

            if (response.status === 200) {
                setIsLogged(true);
            } else {
                setError('Error de autenticación. Revise sus credenciales');
            }
        } catch (error) {
            setError('Error de autenticación. Revise sus credenciales');
        }
    };

    // Función para manejar el cancelar
    const handleCancel = () => {
        setUsername('');
        setPassword('');
        setError('');
    };

    return isLogged ? <Carros /> : (
        <div id='div__container'>
            <h1 id='titulo__form'>

                <FormattedMessage id="Log-In" />
            </h1>

            <form id='form__container'>
                <div className="form__group" id='username__input'>
                    <label>
                        <FormattedMessage id="Username" />
                    </label>
                    <input type="text" className="form__control" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form__group" id='password__input'>
                    <label>
                        <FormattedMessage id="Password" />
                    </label>
                    <input type="password" className="form__control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <div id='btn__container'>
                    <button className='boton' type="button" id='login__btn' onClick={handleLogin}>
                        <FormattedMessage id="Log in" />
                    </button>
                    <button className='boton' type="button" id='cancel__btn' onClick={handleCancel}>
                        <FormattedMessage id="Cancel" />
                    </button>
                </div>
            </form>
            <p id='error__message'>
                {error && <FormattedMessage id={error} defaultMessage={error} />}
            </p>
        </div>
    );
}

export default Login;
