import React, { Component } from 'react';

class QueryResult extends Component {

    render() {
        return (
            <div>
                <p>Results</p>
                <div>
                    <pre>{this.props.result}</pre>
                </div>
            </div>
        );
    }
}

export default QueryResult;