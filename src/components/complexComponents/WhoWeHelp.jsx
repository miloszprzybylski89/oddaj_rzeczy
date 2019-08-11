import React, { Component } from 'react';
import SectionTitle from '../simpleComponents/SectionTitle';


class WhoWeHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section id='whoWeHelp'>
                <SectionTitle titleLineTwo='Komu pomagamy?' />
            </section>
        );
    }
}

export default WhoWeHelp;