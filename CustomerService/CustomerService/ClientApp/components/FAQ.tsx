import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface FAQState {
    faqList: FAQData[];
    loading: boolean;
}

export class FAQ extends React.Component<RouteComponentProps<{}>, FAQState> {
    constructor() {
        super();
        this.state = {
            faqList: [],
            loading: true
        };

        fetch('api/FAQ/Index')
            .then(response => response.json() as Promise<FAQData[]>)
            .then(data => {
                this.setState({ faqList: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FAQ.renderFAQElement(this.state.faqList);

        return (
            <div>
                <h1>Frequently Asked Questions</h1>

                {contents}
            </div>
        );
    }

    private static renderFAQElement(faqList: FAQData[]) {
        return <table className='table table-striped'>
            <thead>
                <tr>
                    <th><div className="col-sm-2 hidden-xs"></div></th>
                    <th>Question</th>
                    <th>Solution</th>
                </tr>
            </thead>
            <tbody>
                {faqList.map(faq =>
                    <tr key={faq.id}>
                        <th><span className="glyphicon glyphicon-thumbs-up"></span></th>
                        <td>{faq.question}</td>
                        <td>{faq.solution}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

interface FAQData {
    id: number;
    question: string;
    solution: string;
}