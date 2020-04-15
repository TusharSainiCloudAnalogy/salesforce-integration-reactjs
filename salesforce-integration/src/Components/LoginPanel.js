import React, { Component } from 'react';

class LoginPanel extends Component {

    login = () => {
        window.location = '/auth/login';
    }

    render() {
        return (

            <div>
                <p>Welcome, please log in with your Salesforce account:</p>
                <div>
                    <button onClick={this.login}>
                        Log in
                  </button>
                </div>
            </div>


        );
    }
}

export default LoginPanel;