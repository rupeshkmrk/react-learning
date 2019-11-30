import React, { Component } from 'react';

class ClassClick extends Component {
    state = {}
    render() {

        return (
            <div><button onClick={this.clickMe}>Click</button></div>
        );


    }

    clickMe = () => console.log("btn clicked");
}

export default ClassClick;