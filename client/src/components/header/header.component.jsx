import React from 'react';
import {Link} from 'react-router-dom';
import Ganso from '../../ganso';


import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/' >
            <Ganso className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/forms'>
                FORMS
            </Link>
        </div>
    </div>
)

export default Header;