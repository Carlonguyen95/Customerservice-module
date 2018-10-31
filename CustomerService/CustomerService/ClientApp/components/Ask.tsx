import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { CustomerQuestionForm } from './CustomerQuestionForm';

export class Ask extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div>
                <h1>Submit a ticket</h1>

                <CustomerQuestionForm />
            </div>
        );
    }
}
