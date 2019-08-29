import React, { Component } from 'react';
import { connect } from 'react-redux'
import SectionTitle from '../components/simpleComponents/SectionTitle';
import Navigation from '../components/simpleComponents/Navigation';
import { login as ll } from '../Redux/actions/login';
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
                <button onClick={() => this.props.login()} />
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
    login: (login, password) => dispatch(ll("piasqnik", "1234"))
})

export default connect(mapState, mapDispatch)(LoginPage);