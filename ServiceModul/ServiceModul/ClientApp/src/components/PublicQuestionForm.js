import React, { Component } from 'react';

export default class QuestionForm extends Component {
    displayName = QuestionForm.name

    constructor(props) {
        super(props);
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

    async handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        // POST request for Add Question
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(data),
        };

        const request = new Request('api/Public/Create', options);
        const response = await fetch(request);
        const status = await response.status;

        alert('JSON: ' + this.state.topic + " " + this.state.question);
    }

    render() {
        return (
            <form>
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
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        );
    }
}