import React, { Component } from 'react';

class NavBar extends Component {

    logout = () => {
        window.location = '/auth/logout';
    }

    render() {
        return (
            <div>

                <div >
                    <div>
                        <p title="Salesforce React Integration">Salesforce React Integration</p>
                        <p>A sample integration project between Force.com and a React application</p>

                    </div>
                    {
                        /*  Logged user name */
                        this.props.user == null ? null :
                            <div className="slds-col--padded slds-no-flex slds-grid slds-align-middle">
                                Hi {this.props.user.display_name}
                            </div>
                    }

                    {
                        /*   Logout button */
                        this.props.user === null ? null :
                            <div>
                                <button onClick={this.logout}>
                                    Logout
                                </button>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default NavBar;