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
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="customerEmail" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="customerEmail" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="customerQuestion" className="col-sm-2 control-label">Your Question</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="customerQuestion" placeholder="What is your question?" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}