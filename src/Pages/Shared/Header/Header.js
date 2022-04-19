import React from 'react';
import './Header.css'
import logo from '../../../Images/images/logo2.png'

import { ShoppingCartIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='navbar-right'>
                <p className='cart-icon'><ShoppingCartIcon></ShoppingCartIcon></p>
                <Link to='/login'>Login </Link>
                <Link to='/signup'>Sign up</Link>

            </div>

        </div>
    );
};

export default Header;