import * as React from 'react';

interface CustomerQuestionFormState {
    value: string;
}

export class CustomerQuestionForm extends React.Component<{}, CustomerQuestionFormState> {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        alert('Email submitted: ' + this.state.value);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="customerEmail">User email</label>
                    <input type="email" className="form-control" id="customerEmail" placeholder="example@hotmail.com"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="customerTopic">Your Topic</label>
                    <input type="text" className="form-control" id="customerTopic" placeholder="What is your topic?" />
                </div>

                <div className="form-group">
                    <label htmlFor="customerQuestion">Your Question</label>
                    <textarea type="text" rows={3} className="form-control" id="customerQuestion" placeholder="What is your question?" />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        );
    }
}