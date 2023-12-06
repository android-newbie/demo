import React, { Component } from "react";

class Greetings extends Component {
    constructor() {
        super();
        this.state = {
            name:'xxxxx',
            count: 0
        }
    }

    changeName() {
        this.setState(prevState=>({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
            <h1>Stateful count is: {this.state.count} and name is: {this.state.name}</h1>
            <button onClick={() => this.changeName()}>Change</button>
            </div>
        )
    }
}

export default Greetings;