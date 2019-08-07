import React, { Component } from 'react';
import Header from '../components/complexComponents/Header';
import StartHelping from '../components/complexComponents/StartHelping';
import AboutUs from '../components/complexComponents/AboutUs';
import AlreadyDone from '../components/complexComponents/AlreadyDone';
import FourSimpleSteps from '../components/complexComponents/FourSimpleSteps';
import WhoWeHelp from '../components/complexComponents/WhoWeHelp';
import ContactUs from '../components/complexComponents/ContactUs';

class LandingPage extends Component {


    render() {
        return (
            <div className='landingPage'>
                <Header />
                <StartHelping />
                <AlreadyDone />
                <FourSimpleSteps />
                <AboutUs />
                <WhoWeHelp />
                <ContactUs />
            </div>
        );
    }
}

export default LandingPage;