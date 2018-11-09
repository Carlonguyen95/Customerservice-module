import React, { Component } from 'react';

export default class PublicQuestionsTable extends Component {
    displayName = PublicQuestionsTable.name

    constructor(props) {
        super(props);

        this.state = {
            answer: '',
            publicQuestionListChild: this.props.publicQuestionList
        }

        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        fetch('api/QuestionModels')
            .then(response => response.json())
            .then(data => {
                this.setState({ publicQuestionListChild: data });
            });
    };

    handleChange(event) {
        this.setState({ answer: event.target.value });
    }

    handleAnswerSubmit(index) {
        fetch('api/QuestionModels/'+ index, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'QuestionID': index,
                'QuestionSolution': this.state.answer
            })
        }).then(response => {
            return response;
        }).catch(err => err);
    }

    render() {
        return (
            <div className='panel-group' id='accordion' role='tablist' aria-multiselectable="true">
                {this.state.publicQuestionListChild.map((faq, index) =>
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
                                <p>{faq.question}</p>
                                <hr />
                                <div>{faq.questionSolution}</div>
                                <hr />

                                <div className="form-group">
                                    <label htmlFor="customerQuestion">Your Answer</label>
                                    <textarea type="text" rows={2} className="form-control" name="answer"
                                        value={this.state.answer}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary" onClick={this.handleAnswerSubmit(index)}>Post Your Answer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        );
    }
}