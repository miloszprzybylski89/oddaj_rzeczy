import React, { Component } from 'react';
import SectionTitle from '../components/simpleComponents/SectionTitle';
import Navigation from '../components/simpleComponents/Navigation';
import SignUpForm from '../components/complexComponents/SignUpForm';

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
                <SignUpForm />
            </>
        );
    }
}

export default SignUp;