import React, { Component } from 'react';
import { connect } from 'react-redux'
import SectionTitle from '../components/simpleComponents/SectionTitle';
import Navigation from '../components/simpleComponents/Navigation';
import { login } from '../Redux/actions';
import { NavLink } from "react-router-dom";

class LoginPage extends Component {
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
                <NavLink to='/signUp/'>Zarejestruj się</NavLink>
            </>
        );
    }
}

const mapState = ({ user }) => ({
    user
})

const mapDispatch = (dispatch) => ({
    login: (email, password) => dispatch(login(email, password))
})

export default connect(mapState, mapDispatch)(LoginPage);