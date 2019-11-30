import React, { Component } from 'react';

class EventBind extends Component {
    constructor() {
        super()

        /* second approach */
        this.clickHandler = this.clickHandler.bind(this)
    }

    state = {
        message: "Hello"
    }

    /* first approach 
        not recommended at all
    */
    clickHandler1() {
        this.setState({ message: "Good Bye !" })
        console.log("Btn Clicked");
    }

    /* fourth approach */
    clickHandler = () => {

        this.setState({ message: "Good Bye !" })
        console.log("btn-clicked");
    }


    render() {
        return (<div>
            <h1>EventBind</h1>
            <h2>{this.state.message}</h2>

            <button onClick={this.clickHandler1.bind(this)}>Click Approach 1</button><br />
            <button onClick={this.clickHandler}>Click Approach 2</button><br />
            {/* third approach */}
            <button onClick={() => this.clickHandler1()}>Click</button><br />
            <button onClick={this.clickHandler}>Click</button>



        </div>);
    }
}

export default EventBind;