import React from 'react';

class Button extends React.Component {
    state = { 
        isShowing: false,
    }
    onClick = () => {
        this.setState({ isShowing: !this.state.isShowing });
    }
    render() { 
        return (
            <React.Fragment>
                <h2>Button</h2>
                <br />
                <button id="testButton" onClick={this.onClick}>{this.state.isShowing ? "Click to Hide" : "Click to Show" }</button>
                {this.state.isShowing ? <div id="testModal"><h2>howdy</h2></div> : null}
                <br />
            </React.Fragment>
        );
    }
}
 
export default Button;