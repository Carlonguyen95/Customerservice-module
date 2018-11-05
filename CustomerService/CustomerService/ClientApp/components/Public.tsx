import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export class Public extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div>
                <h1>Browse Public Questions</h1>
                    <Link to="/ask">Ask a Question</Link>
            </div>
        );
    }
}
