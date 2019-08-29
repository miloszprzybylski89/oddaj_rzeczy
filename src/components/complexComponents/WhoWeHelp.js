import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionTitle from '../simpleComponents/SectionTitle';
import { getFoundations } from '../../Redux/actions/foundations'

class WhoWeHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.getFoundations();
    }
    render() {
        return this.props.pending ? <div>Loading ...</div> : (
            <section id='whoWeHelp'>
                <SectionTitle titleLineTwo='Komu pomagamy?' />
            </section>
        );
    }
}

const mapState = state => ({
    foundations: state.foundations.items,
    pending: state.foundations.pending
})

const mapDispatch = dispatch => ({
    getFoundations: () => dispatch(getFoundations())
})

export default connect(mapState, mapDispatch)(WhoWeHelp);