import React, { Component } from 'react';
import PublicQuestionForm from './PublicQuestionForm';
import PublicQuestions from './PublicQuestions';

export class Public extends Component {
    displayName = Public.name

    render() {
        return (
            <div>
                <h1>Browse Public Questions</h1>

                <PublicQuestionForm />

                <PublicQuestions />
            </div>
        );
    }
}
