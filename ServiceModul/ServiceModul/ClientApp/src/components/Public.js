import React, { Component } from 'react';
import PublicQuestionForm from './PublicQuestionForm';
import PublicQuestionsTable from './PublicQuestionsTable';

export class Public extends Component {
    displayName = Public.name

    constructor() {
        super();

        this.state = {
            topic: '',
            question: '',
            publicQuestionList: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'QuestionTopic': this.state.topic,
                'Question': this.state.question
            })
        }).then(response => {
            return response;
        }).catch(err => err);

        let publicQuestionList = [...this.state.publicQuestionList];

        publicQuestionList.push({
            topic: this.state.topic,
            question: this.state.question
        });

        this.setState({
            publicQuestionList,
            topic: '',
            question: ''
        });
    }

    render() {
        return (
            <div>
                <h1>Browse Public Questions</h1>
                <PublicQuestionForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} topic={this.state.topic} question={this.state.question} />
                <hr />
                <PublicQuestionsTable publicQuestionList={this.state.publicQuestionList} />
            </div>
        );
    }
}
