import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { CustomerQuestionForm } from './CustomerQuestionForm';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div>
                <h1>Hello, world!</h1>

                <CustomerQuestionForm />
            </div>
        );
    }
}
