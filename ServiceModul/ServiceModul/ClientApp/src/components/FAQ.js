import React, { Component } from 'react';
import './FAQ.css';

export class FAQ extends Component {
    displayName = FAQ.name

    constructor() {
        super();
        this.state = {
            faqList: []
        };

        fetch('api/FAQ')
            .then(response => response.json())
            .then(data => {
                this.setState({ faqList: data });
            });
    }

    render() {
        return (
            <div>
                <h1 id="faqTitle">General FAQ</h1>
                <hr />
                <div className='panel-group' id='accordion' role='tablist' aria-multiselectable="true">

                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading">
                            <h4 className='panel-title'>
                                <a role='button' data-toggle='collapse' data-parent='#accordion' href="#q" aria-expanded="true" aria-controls="#q">
                                    <span className='glyphicon glyphicon-question-sign'></span> What is FAQ?
                                    </a>
                            </h4>
                        </div>

                        <div id="q" className='panel-collapse collapse in' role='tabpanel' aria-labelledby='heading'>
                            <div className='panel-body'>
                                <h5><span className='label label-success'>Answer</span></h5>
                                <p>A list of questions and answers relating to a particular subject,
                                    especially one giving basic information for users of a website.</p>
                            </div>
                        </div>
                    </div>

                    {this.state.faqList.map((faq, index) =>
                        <div key={index} className='panel panel-default'>
                            <div className='panel-heading' role='tab' id="heading10">
                                <h4 className='panel-title'>
                                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href={"#" + index} aria-expanded="false" aria-controls={"#" + index}>
                                        <span className='glyphicon glyphicon-question-sign'></span> {faq.question}
                                    </a>
                                </h4>
                            </div>

                            <div id={index} className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading10'>
                                <div className='panel-body'>
                                    <h5><span className='label label-success'>Answer</span></h5>
                                    <p>{faq.solution}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}