import React from 'react';
import { FaRegCopyright, FaFacebookF, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <section id='footer'>
            <div></div>
            <span className='copyright'>Copyright 2015 <FaRegCopyright /> by Anna Dadej</span>
            <div className='socialMedia'>
                <div className='socialMedia__logo'><FaFacebookF /></div>
                <div className='socialMedia__logo'><FaInstagram /></div>
            </div>
        </section>
    );
}

export default Footer;