import React, { Component } from 'react';
import NavBar from './NavBar';
import QueryForm from './QueryForm';
import LoginPanel from './LoginPanel';
import QueryResults from './QueryResult';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            result: ''
        }
    }

    componentDidMount() {
        //const that = this;
        //!Get logged in user
        fetch('/auth/whoami', {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    this.setState({ user: json });
                });
            } else if (response.status !== 401) {
                //! Ignore unauthorized response
                console.log('Failed to retrieve logged user.', JSON.stringify(response));
            }
        });
    }

    handleQueryExecution = (data) => {
        const queryURL = '/query?q=' + encodeURI(data.query);
        fetch(queryURL, {
            headers: {
                Accept: 'application/json'
            },
            cache: 'no-store'
        }).then((response) => {
            response.json().then((json) => {
                if (response.ok) {
                    this.setState({ result: JSON.stringify(json, null, 2) });
                } else {
                    this.setState({ result: 'Failed to retrieve query result.' });
                }
            });
        });
    }

    render() {
        return (
            <div>
                <NavBar user={this.state.user} />
                {this.state.user == null ? <LoginPanel /> :
                    <div>
                        <QueryForm onExecuteQuery={this.handleQueryExecution} />
                        {this.state.result ? <QueryResults result={this.state.result} /> :
                            <p>
                                Nothing Found
                            </p>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Main;