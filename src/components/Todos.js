import React, { Component } from 'react'

export default class Todos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isClicked: false,
            todos: [],
            text: ""
        }
    }

    handleClick = () => {
        console.log("clicked", this.state.isClicked)

        this.setState({
            isClicked: !this.state.isClicked
        })
    }

  render() {
    return ( 
        <div>
            <input onChange={(event) => this.setState({ text: event.target.value})} />
            <button onClick={this.handleClick}>Add Todo</button>
        </div>
    )
  }
}
