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
            rating: 0,
            publicQuestionList: []
        }

        this.handleFetchData = this.handleFetchData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
        this.upvote = this.upvote.bind(this);
        this.getValidationStateTopic = this.getValidationStateTopic.bind(this);
        this.getValidationStateQuestion = this.getValidationStateQuestion.bind(this);

        fetch('api/QuestionModels')
            .then(response => response.json())
            .then(data => {
                this.setState({ publicQuestionList: data });
            });
    };

    handleFetchData() {
        fetch('api/QuestionModels')
            .then(response => response.json())
            .then(data => {
                this.setState({ publicQuestionList: data });
            });
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

        if (!(this.getValidationStateTopic() && this.getValidationStateQuestion())) {
            return false;
        }

        // POST request for Add Question
        fetch('api/QuestionModels', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'QuestionTopic': this.state.topic,
                'Question': this.state.question
            })
        }).then(response => {
            this.handleFetchData();
        }).catch(err => err);

        let publicQuestionList = [...this.state.publicQuestionList];

        publicQuestionList.push({
            questionTopic: this.state.topic,
            question: this.state.question,
            rating: this.state.rating
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
            this.handleFetchData();
            }).catch(err => err);

        this.setState({
            answer: ''
        });
    }

    upvote(id, question, topic, answer, rating) {
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
            this.handleFetchData();
        }).catch(err => err);

        this.setState({
            answer: ''
        });
    }

    getValidationStateTopic() {
        const topic = this.state.topic;
        var regex = new RegExp("^[a-zA-Z ]{5,40}$");

        if (regex.test(topic) && topic.length > 5) return 'success';
        else if (topic.length > 0) return 'error';
        return null;
    }

    getValidationStateQuestion() {
        const question = this.state.question;
        var regex = new RegExp("^[a-zA-Z ]{5,500}$");

        if (regex.test(question) && question.length > 5) return 'success';
        else if (question.length > 0) return 'error';
        return null;
    }

    render() {
        return (
            <div>
                <h1>Browse Public Questions</h1>
                <PublicQuestionForm
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    getValidationStateTopic={this.getValidationStateTopic}
                    getValidationStateQuestion={this.getValidationStateQuestion}
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
