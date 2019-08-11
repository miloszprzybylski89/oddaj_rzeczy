import React from 'react';
import StartHelping from './StartHelping';
import Navigation from '../simpleComponents/Navigation';


const Header = () => {
    return (
        <header id='header'>
            <Navigation />
            <StartHelping />
            <div className='functions'>

            </div>
        </header>
    );
}

export default Header;