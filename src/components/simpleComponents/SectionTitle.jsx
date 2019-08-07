import React from 'react';
import decoration from '../../assets/images/decoration.png'

const SectionTitle = (props) => {

    return (
        <>
            <h1 className='sectionTitle'>{props.title}</h1>
            <img src={decoration} alt="decoration" />
        </>
    );
}

export default SectionTitle;
