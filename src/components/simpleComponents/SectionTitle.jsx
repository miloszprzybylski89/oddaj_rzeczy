import React from 'react';
import decoration from '../../assets/images/decoration.png'

const SectionTitle = (props) => {

    return (
        <div className='sectionTitle'>
            <h1 className='sectionTitle-title'>{props.titleLineOne}</h1>
            <h1 className='sectionTitle-title'>{props.titleLineTwo}</h1>
            <img className='sectionTitle-decoration' src={decoration} alt="decoration" />
        </div>
    );
}

export default SectionTitle;
