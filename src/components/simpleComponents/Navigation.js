import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <>
            <div className='login'>
                <NavLink to='/login/' className='login__btn'>Login</NavLink>
                <NavLink to='/signUp/' className='login__btn-signUp'>Załóż konto</NavLink>
            </div>
            <nav>
                <ul className='navigation'>
                    <li className='navigation__element'><NavLink style={{ textDecoration: 'none', color: 'black' }} exact to='/' activeClassName='activeNavLink'>Start</NavLink></li>
                    <li className='navigation__element'><ScrollLink activeClass="active" to="fourSimpleSteps" spy={true} smooth={true} duration={1000} delay={100} >O co chodzi?</ScrollLink></li>
                    <li className='navigation__element'><ScrollLink activeClass="active" to="aboutUs" spy={true} smooth={true} duration={1000} delay={100} >O nas</ScrollLink></li>
                    <li className='navigation__element'><ScrollLink activeClass="active" to="whoWeHelp" spy={true} smooth={true} duration={1000} delay={100} >Fundacje i organizacje</ScrollLink></li>
                    <li className='navigation__element'><ScrollLink activeClass="active" to="contactUs" spy={true} smooth={true} duration={1000} delay={100} >Kontakt</ScrollLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;