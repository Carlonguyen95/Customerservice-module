import * as React from 'react';

interface CustomerQuestionFormState {
    email: string;
    topic: string;
}

export class CustomerQuestionForm extends React.Component<{}, CustomerQuestionFormState> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            topic: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //getValidationState() {
    //    const length = this.state.value.length;
    //    if (length > 10) return 'has-success';
    //    else if (length > 5) return 'has-warning';
    //    else if (length > 0) return 'has-error';
    //    return null;
    //}

    handleChange(e) {
        this.setState({ email: e.target.email });
    }

    handleSubmit(e) {
        alert('Email submitted: ' + this.state.email);
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