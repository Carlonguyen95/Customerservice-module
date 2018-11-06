import React, { Component } from 'react';

export class FAQ extends Component {
    constructor() {
        super();
        this.state = {
            faqList: [],
            loading: true
        };

        fetch('api/FAQ')
            .then(response => response.json())
            .then(data => {
                this.setState({ faqList: data, loading: false });
            });
    }

    static renderFAQ(faqList) {
        return <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Solution</th>
                </tr>
            </thead>
            <tbody>
                {faqList.map(faq =>
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
            ? <p><em>Loading...</em></p>
            : FAQ.renderFAQ(this.state.faqList);

        return (
            <div>
                <h1>Frequently Asked Questions</h1>

                {contents}
            </div>
        );
    }
}