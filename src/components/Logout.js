import React from 'react';
import {useNavigate} from 'react-router-dom';
import './logout.css'
// import Login from './Login';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = (e) =>{
        e.preventDefault();
        navigate('/')
        console.log("logout.......");
    }
    return (
        <div>
            <form onSubmit={handleLogout}>
            <div className='lalalala'>
                 <span className='user__name'>Welcome  tapendra</span> 
                <button type='submit'  className='logout'>Logout</button>
            </div>
            </form>
        </div>
    )
}

export default Logout