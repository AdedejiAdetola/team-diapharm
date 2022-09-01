import { useState } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import './LoginPage.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        try{
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error)
        }
    }
    return ( 
        <div className="login">
            <Header />

            <div className='login-container'>
                <form onSubmit={handleSubmit}>
                    

                    <div className='email'>
                        <label htmlFor='email'>E-mail</label>
                        <input 
                            id='email'
                            type='email' 
                            name='email' 
                            value={email} 
                            onChange={(e) => {setEmail(e.target.value)}}
                            required
                        />
                    </div>

                    <div className='password'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            id='password'
                            type='password' 
                            name='password' 
                            value={password} 
                            onChange={(e) => {setPassword(e.target.value)}}
                            required
                        />
                    </div>

                    <div className='signin-button'>
                        <Button value='Sign in' />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;