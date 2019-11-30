import React, { Component } from 'react';

function functionClick() {
    function clickMe() {
        console.log("btn clicked");
    }
    return (<div><button onClick={clickMe}>Click Me</button></div>)
}

export default functionClick;