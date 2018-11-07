import React, { Component } from 'react';

export default class QuestionForm extends Component {
    displayName = QuestionForm.name

    constructor() {
        super();
        this.state = {
            topic: '',
            question: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        // POST request for Add Question
        fetch('api/QuestionModels', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                'QuestionTopic': this.state.topic,
                'Question': this.state.question
            })
        }).then(response => {
            return response;
            }).catch(err => err);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="customerTopic">Your Topic</label>
                    <input type="text" className="form-control" name="topic" placeholder="What is your topic?"
                        value={this.state.topic} onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="customerQuestion">Your Question</label>
                    <textarea type="text" rows={3} className="form-control" name="question" placeholder="What is your question?"
                        value={this.state.question} onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Submit"/>
                </div>
            </form>
        );
    }
}