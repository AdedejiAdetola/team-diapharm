import { useState } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import './Signup.scss';
const Signup = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try{
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error(error)
        }
    }
    return ( 
        
        <div className='signup'>
            <Header />

            <div className='signup-container'>
                <form onSubmit={handleSubmit}>
                    <div className='fname'>
                        <label htmlFor='fname'>First Name</label>
                        <input 
                            id='fname'
                            type='text' 
                            name='fname' 
                            value={firstname} 
                            onChange={(e) => {setFirstname(e.target.value)}}
                            placeholder = 'Adisa'
                            required
                        />
                    </div>

                    <div className='lname'>
                        <label htmlFor='lname'>Last Name</label>
                        <input 
                            id='lname'
                            type='text' 
                            name='lname' 
                            value={lastname} 
                            onChange={(e) => {setLastname(e.target.value)}}
                            placeholder = 'Price'
                            required
                        />
                    </div>

                    <div className='email'>
                        <label htmlFor='email'>E-mail</label>
                        <input 
                            id='email'
                            type='email' 
                            name='email' 
                            value={email} 
                            onChange={(e) => {setEmail(e.target.value)}}
                            placeholder = 'adisaprice390@gmail.com'
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

                    <div className='cpassword'>
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <input 
                            id='cpassword'
                            type='password' 
                            name='cpassword' 
                            value={confirmPassword} 
                            onChange={(e) => {setConfirmPassword(e.target.value)}}
                            required
                        />
                    </div>
                    
                    <div className='signup-button'>
                        <Button value='Sign up' />
                    </div>

                    
                </form>
            </div>
        </div>
     );
}
 
export default Signup;