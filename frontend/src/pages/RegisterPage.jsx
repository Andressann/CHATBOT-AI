import {Link, Navigate} from 'react-router-dom';
import {useContext, useState} from 'react';
import {UserContext} from '../context/UserContext';

export default function RegisterPage() {
    const [user, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
        });
        const data = await response.json();
        setUser(data);
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <div class = "main">
            <input type = "checkbox" id = "chk" aria-hidden = "true">
                <div class = "Register">
                    </div>

                    <div class = "Register">
                        <form>
                            <label for = "chk"
                            aria-hidden = "ture">REGISTRAR</label>
                            <input type = "text" name = "user" placeholder = "Username" required = ""></input>
                            <input type = "email" name = "email" placeholder = "Email" required = ""></input>
                            <input type = "Password" name = "pswd" placeholder = "Password" required = ""></input>
                            <button>Iniciar</button>
                        </form>
                    </div>
            </input>
        </div>
    )
}