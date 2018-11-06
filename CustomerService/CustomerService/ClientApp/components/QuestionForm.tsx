import * as React from 'react';

interface CustomerQuestionFormState {
    topic: string;
    question: string;
}

export class CustomerQuestionForm extends React.Component<{}, CustomerQuestionFormState> {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            question: '',
        };

        this.handleTopic = this.handleTopic.bind(this);
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTopic(event) {
        this.setState({
            topic: event.target.value
        });
    }
    handleQuestion(event) {
        this.setState({
            question: event.target.value
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

        const request = new Request('api/Customer/Create', options);
        const response = await fetch(request);
        const status = await response.status;

        alert('JSON: ' + this.state.topic + " " + this.state.question);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="customerTopic">Your Topic</label>
                    <input type="text" className="form-control" id="topic" placeholder="What is your topic?"
                        onChange={this.handleTopic}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="customerQuestion">Your Question</label>
                    <textarea type="text" rows={3} className="form-control" id="question" placeholder="What is your question?"
                        onChange={this.handleQuestion}
                    />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        );
    }
}