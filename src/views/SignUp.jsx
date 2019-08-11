import React, { Component } from 'react';
import SectionTitle from '../components/simpleComponents/SectionTitle';
import Navigation from '../components/simpleComponents/Navigation';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Navigation />
                <SectionTitle titleLineOne='Zarejestruj się' />
            </>
        );
    }
}

export default SignUp;