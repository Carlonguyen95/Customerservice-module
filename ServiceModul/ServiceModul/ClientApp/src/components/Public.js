import React, { Component } from 'react';
import PublicQuestionForm from './PublicQuestionForm';
import PublicQuestions from './PublicQuestions';

export class Public extends Component {
    displayName = Public.name

    render() {
        return (
            <div>
                <h1>Ask Question</h1>
                <hr />
                <PublicQuestionForm />

                <h1>Browse Public Questions</h1>
                <hr />
                <PublicQuestions />
            </div>
        );
    }
}
