import React, { Component } from 'react';
import SectionTitle from '../components/simpleComponents/SectionTitle';
import Navigation from '../components/simpleComponents/Navigation';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Navigation />
                <SectionTitle titleLineOne='Zaloguj się' />
            </>
        );
    }
}

export default Login;