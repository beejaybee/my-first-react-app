import React, { Component } from 'react';


class MyComponent extends Component{
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            foo: 'Click me'
        }
    }

    handleClick() {
        this.setState({
            foo: 'bar'
        });
        alert('click')
    };
    
    render() {
        return (
            <button  className="App-button" onClick={this.handleClick}>
                {this.state.foo}
            </button>
        );
    }
}

export default MyComponent;