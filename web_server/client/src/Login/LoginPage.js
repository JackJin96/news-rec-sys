//Logics part of the login page

import LoginForm from './LoginForm';
import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        };
    }

    processFrom(event) {
        //the default dehavior is to set a http post request
        event.preventDefault();

        const email = this.state.user.email;
        const password = this.state.user.password;

        console.log('email:', email);
        console.log('password:', password);

        // TODO: post login data to server
    }

    changeUser(event) {
        //get email and password from LoginForm
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({user});
    }

    render () {
        return (
            <LoginForm
                onSubmit={(e) => this.processForm(e)}
                onChange={(e) => this.changeUser(e)}
                errors={this.state.errors}
            />
        );
    }
}

export default LoginPage;