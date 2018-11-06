﻿import React, { Component } from 'react';

export class PublicQuestions extends Component {
    constructor() {
        super();
        this.state = {
            publicQuestionList: [],
            loading: true
        };

        fetch('api/QuestionModels')
            .then(response => response.json())
            .then(data => {
                this.setState({ publicQuestionList: data, loading: false });
            });
    }

    static renderPublicQuestions(publicQuestionList) {
        return <table className='table table-striped'>
            <thead>
                <tr>
                    <th> Question </th>
                    <th> Solution </th>
                </tr>
            </thead>
            <tbody>
                {publicQuestionList.map(faq =>
                        <tr key={faq.id}>
                            <td>{faq.question}</td>
                            <td>{faq.solution}</td>
                        </tr>
                    )}
            </tbody>
        </table>;
    }

    render() {
        let contents = this.state.loading
            ? <p><em> Loading...</em></p>
            : PublicQuestions.renderPublicQuestions(this.state.publicQuestionList);

        return (
            <div>
                {contents}
            </div>
        );
    }
}