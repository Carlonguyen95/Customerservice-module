import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
        <div>
            <h1>Customer Support!</h1>
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <ControlLabel>Your Topic</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter your topic"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Sum text</HelpBlock>
                    </FormGroup>
                </form>
        </div>
        );
    }
}
render(<FormExample/>);

