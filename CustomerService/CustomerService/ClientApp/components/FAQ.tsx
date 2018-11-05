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
            : this.renderFAQElement(this.state.faqList);

        return (
            <div>
                <h1>Frequently Asked Questions</h1>

                {contents}
            </div>
        );
    }

    private renderFAQElement(faqList: FAQData[]) {
        return (
            <div>
                {faqList.map(faq =>
                    <h1>{faq.title}</h1>
                    )}
            </div>
        );
        
    }
}

interface FAQData {
    title: string;
    question: string;
}
