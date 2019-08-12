import React from 'react';
import { connect } from 'react-redux';
import LandingPage from '../views/LandingPage'

const mapState = (state) => {
    return ({
        user: state.user
    })
}


export default connect(mapState)(LandingPage)
