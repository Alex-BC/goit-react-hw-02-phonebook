import React, { Component} from 'react';

class Form extends Component {
    state = { 
        name: "",
        number: "",
    }

     handleChange = (e) => {
        const { name, value } = e.currentTarget;

        this.setState({
        [name]: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.name);
        

        // Reset
        this.setState({ name: '' ,number: ''})
        
    }

    
render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
            Name
            <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
            />
            </label>
            <label>
            Number
            <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
            />
            </label>
            <button type="submit">Add contact</button>
        </form>)
    }
 }

export default Form;