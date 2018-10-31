import * as React from 'react';
import { FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';
import { render } from 'react-dom';

export class CustomerQuestionForm extends React.Component {
    state = { value: '' };

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
            <form>
                <FormGroup controlId="formEmailText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Email address</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="customer@hotmail.com"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>

                <FormGroup controlId="formQuestionText" >
                    <ControlLabel>Your Question</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        type="text"
                        placeholder="What is your question?"
                    />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </form>
        );
    }
}