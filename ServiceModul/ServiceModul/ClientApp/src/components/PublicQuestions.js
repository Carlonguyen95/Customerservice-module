import React, { Component } from 'react';

export default class PublicQuestions extends Component {
    displayName = PublicQuestions.name

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
                    <th> Topic </th>
                    <th> Question </th>
                </tr>
            </thead>
            <tbody>
                {publicQuestionList.map(faq =>
                        <tr>
                            <td>{faq.questionTopic}</td>
                            <td>{faq.question}</td>
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