import React, { Component } from 'react';

export default class PublicQuestionForm extends Component {
    displayName = PublicQuestionForm.name

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div role='tab' id="heading10">
                    <h4 className='panel-title'>
                        <button className='collapsed btn btn-primary' data-toggle='collapse' data-parent='#accordion' href="#q10" aria-expanded="false" aria-controls="#q10">
                            <span className='glyphicon glyphicon-edit'></span> Ask Question
                        </button>
                    </h4>
                </div>

                <div id="q10" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading10'>
                    <div className='panel-body'>
                        <form onSubmit={this.props.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="customerTopic">Your Topic</label>
                                <input type="text" className="form-control" name="topic" placeholder="What is your topic?"
                                    value={this.props.topic} onChange={this.props.handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="customerQuestion">Your Question</label>
                                <textarea type="text" rows={3} className="form-control" name="question" placeholder="What is your question?"
                                    value={this.props.question} onChange={this.props.handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <input type="submit" className="btn btn-primary" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}