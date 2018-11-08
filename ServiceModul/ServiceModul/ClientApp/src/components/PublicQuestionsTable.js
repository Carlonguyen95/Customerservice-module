import React, { Component } from 'react';

export default class PublicQuestionsTable extends Component {
    displayName = PublicQuestionsTable.name

    constructor(props) {
        super(props);

        fetch('api/QuestionModels')
            .then(response => response.json())
            .then(data => {
                this.setState({ publicQuestionList: data, loading: false });
            });
    }

    render() {
       
        return (
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th> Topic </th>
                            <th> Question </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.publicQuestionList.map(faq =>
                            <tr>
                                <td>{faq.questionTopic}</td>
                                <td>{faq.question}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}