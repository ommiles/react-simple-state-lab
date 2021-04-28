import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        } // ...define initial state with a key of 'color' set to the 'value' prop
    }

    render() {
        console.log(this.state)
        return(
            <div 
                onClick={() => this.setState({color: '#333'})}
                className="cell" 
                style={{backgroundColor: `${this.state.color}`}}>
            </div>
        )
    }
}