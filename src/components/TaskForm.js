import React, { Component } from 'react';

export default class TaskForm extends Component {
    state = {
        title: '',
        description: ''
    }

    // Listen submit buttom
    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }
    // Listen inputs
    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                    name="title"
                    placeholder="Write something"
                    onChange={this.onChange}
                    value={this.state.title} required/>
                <textarea cols="6" rows="4"
                    name="description"
                    placeholder="Write a description"
                    onChange={this.onChange}
                    value={this.state.description} required>
                </textarea>
                <input type="submit" value="Save your things"/>
            </form>
        )
    }
}

