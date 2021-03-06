import React from 'react';
import { FaRegLightbulb, FaArrowDown, FaGlasses, FaExchangeAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import SectionTitle from '../simpleComponents/SectionTitle';


const FourSimpleSteps = () => {
    return (
        <section id='fourSimpleSteps'>
            <SectionTitle titleLineTwo='Wystarczą 4 proste kroki' />
            <div className='fourStepsContainer'>
                <div className='step'>
                    <FaRegLightbulb />
                    <span className='step-title'>Wybierz rzeczy</span>
                    <div className='step-line' />
                    <span className='step-description'>ubrania, zabawki, sprzęt i inne</span>
                </div>
                <div className='step'>
                    <FaArrowDown />
                    <span className='step-title'>Spakuj je</span>
                    <div className='step-line' />
                    <span className='step-description'>skorzystaj z worków na śmieci</span>
                </div>
                <div className='step'>
                    <FaGlasses />
                    <span className='step-title'>Zdecyduj komu chcesz pomóc</span>
                    <div className='step-line' />
                    <span className='step-description'>wybierz zaufane miejsce</span>
                </div>
                <div className='step'>
                    <FaExchangeAlt />
                    <span className='step-title'>Zamów kuriera</span>
                    <div className='step-line' />
                    <span className='step-description'>kurier przyjedzie w dogodnym terminie</span>
                </div>
            </div>
            <NavLink to='/signUp' className='signUp-btn'>
                ZAŁÓŻ KONTO
            </NavLink>
        </section>
    );
}

export default FourSimpleSteps;