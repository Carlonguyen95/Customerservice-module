import React, { Component } from 'react';
import PublicQuestionForm from './PublicQuestionForm';
import PublicQuestionsTable from './PublicQuestionsTable';

export class Public extends Component {
    displayName = Public.name

    constructor() {
        super();

        this.state = {
            answer: '',
            topic: '',
            question: '',
            publicQuestionList: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
        this.upvote = this.upvote.bind(this);

        fetch('api/QuestionModels')
            .then(response => response.json())
            .then(data => {
                this.setState({ publicQuestionList: data });
            });
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
            questionTopic: this.state.topic,
            question: this.state.question
        });

        this.setState({
            publicQuestionList,
            topic: '',
            question: ''
        });
    }

    handleAnswerSubmit(id, topic, question, rating) {
        // PUT request for Answer
        fetch('api/QuestionModels/'+id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'QuestionID': id,
                'QuestionTopic': topic,
                'Question': question,
                'QuestionSolution': this.state.answer,
                'Rating': rating
            })
        }).then(response => {
            return response;
            }).catch(err => err);

        let publicQuestionList = [...this.state.publicQuestionList];

        publicQuestionList.push({
            questionTopic: this.state.topic,
            question: this.state.question,
            questionSolution: this.state.answer,
        });

        this.setState({
            answer: ''
        });
    }

    upvote(id, topic, question, answer, rating) {
        fetch('api/QuestionModels/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'QuestionID': id,
                'QuestionTopic': topic,
                'Question': question,
                'QuestionSolution': answer,
                'Rating': rating + 1
            })
        }).then(response => {
            return response;
        }).catch(err => err);

        let publicQuestionList = [...this.state.publicQuestionList];

        publicQuestionList.push({
            questionTopic: this.state.topic,
            question: this.state.question,
            questionSolution: this.state.answer,
            rating: rating
        });
    }

    render() {
        return (
            <div>
                <h1>Browse Public Questions</h1>
                <PublicQuestionForm
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    topic={this.state.topic}
                    question={this.state.question}
                />

                <hr />

                <PublicQuestionsTable
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    handleAnswerSubmit={this.handleAnswerSubmit}
                    upvote={this.upvote}
                    publicQuestionList={this.state.publicQuestionList}
                    answer={this.state.answer}
                />
            </div>
        );
    }
}
