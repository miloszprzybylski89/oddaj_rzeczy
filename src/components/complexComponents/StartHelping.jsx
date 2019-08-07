// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import ImgInBg from '../simpleComponents/ImgInBg';
import SectionTitle from '../simpleComponents/SectionTitle';
import startHelpingBg from '../../assets/images/background/header_start_img.jpg';

const StartHelping = () => {
    return (
        <section className='section'>
            <ImgInBg
                className='startHelping__img'
                src={startHelpingBg}
                alt='Box with different things'
            />
            <div className='startHelping__content'>
                <SectionTitle
                    title='Zacznij pomagać!' />
            </div>
        </section>
    );
}

export default StartHelping;