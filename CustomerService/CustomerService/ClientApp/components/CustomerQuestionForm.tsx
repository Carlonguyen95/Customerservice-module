import * as React from 'react';

export class CustomerQuestionForm extends React.Component {
    state = { value: '' };

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="customerEmail">User email</label>
                    <input type="email" className="form-control" id="customerEmail" placeholder="example@hotmail.com" />
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }
}