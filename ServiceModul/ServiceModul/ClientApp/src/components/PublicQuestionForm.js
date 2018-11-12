import React, { Component } from 'react';
import { Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap/lib';

export default class PublicQuestionForm extends Component {
    displayName = PublicQuestionForm.name

    render() {
        return (
            <div>
                <div role='tab' id="heading10">
                    <h4 className='panel-title'>
                        <button className='collapsed btn btn-primary' data-toggle='collapse' data-parent='#accordion' href="#publicQuestionFormDiv" aria-expanded="false" aria-controls="#publicQuestionFormDiv">
                            <span className='glyphicon glyphicon-edit'></span> Ask Question
                        </button>
                    </h4>
                </div>

                <div id="publicQuestionFormDiv" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading10'>
                    <div className='panel-body'>
                        <Form onSubmit={this.props.handleSubmit}>
                            <FormGroup
                                label="Question topic"
                                validationState={this.props.getValidationStateTopic()}
                            >
                                <InputGroup>
                                <label htmlFor="customerTopic">Your Topic</label>
                                    <FormControl type="text" name="topic" placeholder="What is your topic?"
                                    value={this.props.topic}
                                    onChange={this.props.handleChange}
                                    />
                                    <FormControl.Feedback/>
                                </InputGroup>
                            </FormGroup>

                            <FormGroup
                                label="Question"
                                validationState={this.props.getValidationStateQuestion()}
                            >
                                <InputGroup>
                                <label htmlFor="customerQuestion">Your Question</label>
                                    <FormControl type="text" componentClass="textarea" rows={3} name="question" placeholder="What is your question?"
                                    value={this.props.question}
                                    onChange={this.props.handleChange}
                                    />
                                    <FormControl.Feedback/>
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <input type="submit" className="btn btn-primary" value="Submit" />
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}