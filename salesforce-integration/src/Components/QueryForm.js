import React, { Component } from 'react';

class QueryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: 'SELECT Id, Name FROM User LIMIT 10'
        }
    }

    handleSubmit = (event) => {

        event.preventDefault();
        let query = this.state.query.trim();

        if (!query) {
            return;
        }
        this.props.onExecuteQuery({ query: query })
    }

    handleQueryChange = (event) => {

        this.setState({ query: event.target.value });

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label><abbr title="required">*</abbr> Query</label>
                        <textarea id="soqlQuery" value={this.state.query} onChange={this.handleQueryChange} required />
                    </div>
                    <div>
                        <button type="submit" disabled={!this.state.query.trim()}>
                            Execute
                        </button>
                    </div>
                </form>
            </div>

        );
    }
}

export default QueryForm;