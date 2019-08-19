import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <form>
                <h1>Join aour community!</h1>

                <div>
                    <label>User name</label>
                    <input
                        type='text'
                        name='username'
                    />
                </div>

                <div>
                    <button>
                        Sign Up
                    </button>
                </div>
            </form>
        );
    }
}

export default SignUpForm;