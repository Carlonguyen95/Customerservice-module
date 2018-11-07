import React, { Component } from 'react';

export class FAQ extends Component {
    displayName = FAQ.name

    constructor() {
        super();
        this.state = {
            faqList: [],
            loading: true,
            shown: true
        };

        this.toggle = this.toggle.bind(this);

        fetch('api/FAQ')
            .then(response => response.json())
            .then(data => {
                this.setState({ faqList: data, loading: false });
            });
    }

    toggle() {
        this.setState({
            shown: !this.state.shown
        });
        alert(this.state.shown);
    }

    static renderFAQ(faqList) {
        return <table className='table table-striped'>
            <thead>
                <tr>
                    <th><div className="col-sm-2 hidden-xs"></div></th>
                </tr>
            </thead>
            <tbody>
                {faqList.map(faq =>
                    <tr key={faq.id}>
                        <td><div><a href="/faq" onClick={this.toggle}><h3>{faq.question}</h3></a></div></td>
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