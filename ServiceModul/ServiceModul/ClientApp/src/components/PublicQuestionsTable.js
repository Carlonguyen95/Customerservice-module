import React, { Component } from 'react';

export default class PublicQuestionsTable extends Component {
    displayName = PublicQuestionsTable.name

    render() {
        const publicQuestionList = this.props.publicQuestionList
        return (
            <div className='panel-group' id='accordion' role='tablist' aria-multiselectable="true">
                {publicQuestionList.map((faq, index) =>
                    <div key={index} className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href={"#"+index} aria-expanded="false" aria-controls={"#"+index}>
                                    <span className='glyphicon glyphicon-question-sign'></span> {faq.questionTopic}
                                </a>
                            </h4>
                        </div>

                        <div id={index} className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading'>
                            <div className='panel-body'>
                                <div className="vote" style={{ float: 'right' }}>
                                    <button type='button' className='btn btn-default btn-sm' onClick={() => this.props.upvote(faq.questionID, faq.question, faq.questionTopic, faq.questionSolution, faq.rating)}>
                                        <span className="glyphicon glyphicon-triangle-top"> {faq.rating}</span>
                                    </button>
                                </div>
                                <label>Question:</label>
                                <p>{faq.question}</p>
                                <hr />
                                <label>Answer:</label>
                                <div id="answerDiv">{faq.questionSolution}</div>
                                <hr />

                                <div className="form-group">
                                    <label htmlFor="customerQuestion">Your Answer</label>
                                    <textarea type="text" rows={2} className="form-control" name="answer"
                                        value={this.props.answer}
                                        onChange={this.props.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" onClick={() => this.props.handleAnswerSubmit(faq.questionID, faq.question, faq.questionTopic, faq.rating)}>Post Your Answer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        );
    }
}