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
        const publicQuestionList = this.props.publicQuestionList;
        return (
            <div>
                {publicQuestionList.map(faq =>

                <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>{faq.topic}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{faq.question}</td>
                            </tr>
                        </tbody>
                    </table>
                )}

            </div>
        );
    }
}