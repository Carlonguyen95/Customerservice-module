import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface AddQuestionState {
    email: string;
    topic: string;
    question: string;
    loading: boolean;
}

export class AddQuestion extends React.Component<RouteComponentProps<{}>, AddQuestionState> {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            topic: "",
            question: "",
            loading: true
        };
    }
}