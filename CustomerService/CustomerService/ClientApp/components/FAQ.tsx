import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class FAQ extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div>
                <h1>Frequently Asked Questions</h1>

                <p>Questions You May Have</p>
            </div>
        );
    }
}
