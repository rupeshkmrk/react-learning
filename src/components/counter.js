import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <h1>Counter Component</h1>
                <h2>count : {this.state.count}</h2>
                <button onClick={() => this.handleIncrement()}>Increment</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 }, () => { console.log(this.state.count); })
    }
}

export default Counter;