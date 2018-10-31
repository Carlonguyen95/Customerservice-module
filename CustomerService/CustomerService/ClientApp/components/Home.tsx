import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { CustomerQuestionForm } from './CustomerQuestionForm';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div>
                <h1>Welcome to Carlos Customer Service</h1>

                <p>This is a help center for Movie Monster</p>
            </div>
        );
    }
}
