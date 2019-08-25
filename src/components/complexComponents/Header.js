import React from 'react';
import StartHelping from './StartHelping';
import Navigation from '../simpleComponents/Navigation';
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <header id='header'>
            <Navigation />
            <StartHelping />
            <div className='functions'>
                <NavLink className='function' to='/login/'> Oddaj rzeczy </NavLink>
                <NavLink className='function' to='/login/'> Zorganizuj zbiórkę </NavLink>
            </div>
        </header>
    );
}

export default Header;