import React, { Component } from 'react';
import QuestionForm from './QuestionForm';

export class Public extends Component {
    displayName = Public.name

    render() {
        return (
            <div>
                <h1>Browse Public Questions</h1>

                <QuestionForm/>
            </div>
        );
    }
}
