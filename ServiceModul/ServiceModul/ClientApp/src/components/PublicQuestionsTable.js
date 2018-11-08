import React, { Component } from 'react';

export default class PublicQuestionsTable extends Component {
    displayName = PublicQuestionsTable.name

    constructor(props) {
        super(props);

        this.state = {
            publicQuestionListChild: this.props.publicQuestionList
        };

        fetch('api/QuestionModels')
            .then(response => response.json())
            .then(data => {
                this.setState({ publicQuestionListChild: data });
            });
    }

    render() {
        return (
            <div>
                {this.state.publicQuestionListChild.map((faq, index) =>
                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href={"#"+index} aria-expanded="false" aria-controls={"#"+index}>
                                    <span className='glyphicon glyphicon-question-sign'></span> {faq.questionTopic}
                                </a>
                            </h4>
                        </div>

                        <div id={index} className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading'>
                            <div className='panel-body'>
                                <p>{faq.question}</p>

                                <hr />

                                <div className="form-group">
                                    <label htmlFor="customerQuestion">Your Answer</label>
                                    <textarea type="text" rows={3} className="form-control" name="question" placeholder="What is your question?"
                                        value={this.props.question}
                                        onChange={this.props.handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" className="btn btn-primary" value="Post Your Answer" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        );
    }
}