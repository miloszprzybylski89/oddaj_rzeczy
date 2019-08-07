// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import ImgInBg from '../simpleComponents/ImgInBg';
import SectionTitle from '../simpleComponents/SectionTitle';
import aboutUsBg from '../../assets/images/background/about.jpg';

const AboutUs = () => {
    return (
        <section className='section'>
            <ImgInBg
                className='aboutUs__img'
                src={aboutUsBg}
                alt='Group of people laughing'
            />
            <div className='aboutUs__content'>
                <SectionTitle title='O nas' />
                <span className='aboutUs__description'>
                    Nori Grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea praire turnip leek lentil turnip greens parsnip.
                </span>
            </div>
        </section>
    );
}

export default AboutUs;