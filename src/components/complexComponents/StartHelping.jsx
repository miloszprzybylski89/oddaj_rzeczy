// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import SectionTitle from '../simpleComponents/SectionTitle';

const StartHelping = () => {
    return (
        <section id='startHelping'>
            <div className='startHelping__content'>
                <SectionTitle
                    titleLineOne='Zacznij pomagać!'
                    titleLineTwo='Oddaj niechciane rzeczy w zaufane ręce' />
            </div>
        </section>
    );
}

export default StartHelping;