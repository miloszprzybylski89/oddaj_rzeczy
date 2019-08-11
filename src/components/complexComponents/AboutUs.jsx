// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import SectionTitle from '../simpleComponents/SectionTitle';

const AboutUs = () => {
    return (
        <section id='aboutUs'>
            <div className='aboutUs__content'>
                <SectionTitle titleLineOne='O nas' />
                <span className='aboutUs__description'>
                    Nori Grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea praire turnip leek lentil turnip greens parsnip.
                </span>
            </div>
        </section>
    );
}

export default AboutUs;