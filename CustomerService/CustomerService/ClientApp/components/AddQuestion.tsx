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

        this.handleSave = this.handleSave.bind(this);
    }

    public render() {
        return <div></div>
    }

    private handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        // POST request for Add Question
        fetch('api/Customer/Create', {
            method: 'POST',
            body: data,

        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.history.push("/");
            })
    }
}