import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            phone: "",
            address: "",
            submitted: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            submitted: false,
        });
    }

    handleSubmit(event) {
        this.setState({
            submitted: true,
        });
        if(event !== undefined) {
            event.preventDefault();
        }
    }

    render() { 
        return ( 
            <React.Fragment>
                <h2>Form</h2>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <label>Name: <input id="nameInput" type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>                    
                    <br />
                    <br />
                    <label>Phone: <input id="phoneInput" type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/></label>
                    <br />
                    <br />
                    <label>Address: <input id="addressInput" type="text" name="address" value={this.state.address} onChange={this.handleChange}/></label>
                    <br />
                    <br />
                    <button id="submitButton" type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
                {this.state.submitted ? 
                    <div id="testData">
                        <h3>Name: {this.state.name}</h3>
                        <h3>Phone: {this.state.phone}</h3>
                        <h3>Address: {this.state.address}</h3>
                    </div> 
                    : null
                }
                <br />
            </React.Fragment>
        );
    }
}
 
export default Form;