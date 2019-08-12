import React, { Component } from 'react';
import SectionTitle from '../simpleComponents/SectionTitle';
import Footer from './Footer';


class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section id='contactUs'>
                <SectionTitle titleLineTwo='Skontaktuj się z nami' />
                <Footer />
            </section>
        );
    }
}

export default ContactUs;