import React from 'react';
import Login from '../complexComponents/Login';
import Navigation from '../simpleComponents/Navigation';

const Header = () => {
    return (
        <header>
            <Login />
            <Navigation />
        </header>
    );
}

export default Header;