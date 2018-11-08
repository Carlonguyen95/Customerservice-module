import React, { Component } from 'react';
import './FAQ.css';

export class FAQ extends Component {
    displayName = FAQ.name

    constructor() {
        super();
        this.state = {
            faqList: [],
            loading: true,
        };

        fetch('api/FAQ')
            .then(response => response.json())
            .then(data => {
                this.setState({ faqList: data, loading: false });
            });
    }

    static renderFAQ(faqList) {
        return (
            <div className='container'>
                {faqList.map(faq =>
                    <div key={faq.id}>
                        <a className='btn btn-primary' role='button' data-toggle='collapse' href={faq.id} aria-expanded='false' aria-controls={faq.id}>
                            {faq.question}
                        </a>

                        <div id={faq.id} className='collapse'>
                            {faq.solution}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    render() {
        //let contents = this.state.loading
        //    ? <p><em>Loading...</em></p>
        //    : FAQ.renderFAQ(this.state.faqList);

        return (
            <div>
                <h1 id="faqTitle">General FAQ</h1>
                <div id='container'>

                    <div className='panel-group' id='accordion' role='tablist' aria-multiselectable="true">
                        <div className='panel panel-default'>
                            <div className='panel-heading' role='tab' id="heading">
                                <h4 className='panel-title'>
                                    <a role='button' data-toggle='collapse' data-parent='#accordion' href="#q" aria-expanded="true" aria-controls="#q">
                                        <span className='glyphicon glyphicon-question-sign'></span> What is MovieMonster?
                                    </a>
                                </h4>
                            </div>

                            <div id="q" className='panel-collapse collapse in' role='tabpanel' aria-labelledby='heading'>
                                <div className='panel-body'>
                                    <h5><span className='label label-success'>Answer</span></h5>
                                    <p>MovieMonster is simply a original major streaming option for home television audiences.
                                        When it started nearly 20 years ago, MovieMonster was a subscription-based DVD service that would mail
                                        DVDs straight to your home.</p>
                                </div>
                            </div>
                        </div>

                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading1">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href="#q1" aria-expanded="false" aria-controls="#q1">
                                    <span className='glyphicon glyphicon-question-sign'></span> How can I buy movies?
                                    </a>
                            </h4>
                        </div>

                        <div id="q1" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading1'>
                            <div className='panel-body'>
                                <h5><span className='label label-success'>Answer</span></h5>
                                <p>Make sure you have a registered account, then navigate to movies.</p>
                            </div>
                        </div>
                    </div>

                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading2">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href="#q2" aria-expanded="false" aria-controls="#q2">
                                    <span className='glyphicon glyphicon-question-sign'></span> Where does the name MovieMonster come from?
                                    </a>
                            </h4>
                        </div>

                        <div id="q2" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading2'>
                            <div className='panel-body'>
                                <h5><span className='label label-success'>Answer</span></h5>
                                <p>Good question.</p>
                            </div>
                        </div>
                    </div>

                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading3">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href="#q3" aria-expanded="false" aria-controls="#q3">
                                    <span className='glyphicon glyphicon-question-sign'></span> How can I get a job at MovieMonster?
                                    </a>
                            </h4>
                        </div>

                        <div id="q3" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading3'>
                            <div className='panel-body'>
                                <h5><span className='label label-success'>Answer</span></h5>
                                <p>We dont hire.</p>
                            </div>
                        </div>
                    </div>

                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading4">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href="#q4" aria-expanded="false" aria-controls="#q4">
                                    <span className='glyphicon glyphicon-question-sign'></span> Is is possible to rent movies only?
                                    </a>
                            </h4>
                        </div>

                        <div id="q4" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading4'>
                            <div className='panel-body'>
                                <h5><span className='label label-success'>Answer</span></h5>
                                <p>Renting functionality will be supported soon.</p>
                            </div>
                        </div>
                    </div>

                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading5">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href="#q5" aria-expanded="false" aria-controls="#q5">
                                    <span className='glyphicon glyphicon-question-sign'></span> Who is the one?
                                    </a>
                            </h4>
                        </div>

                        <div id="q5" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading5'>
                            <div className='panel-body'>
                                <h5><span className='label label-success'>Answer</span></h5>
                                <p>Neo is the one.</p>
                            </div>
                        </div>
                    </div>

                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading6">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href="#q6" aria-expanded="false" aria-controls="#q6">
                                    <span className='glyphicon glyphicon-question-sign'></span> What is the cheapest movie?
                                    </a>
                            </h4>
                        </div>

                        <div id="q6" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading6'>
                            <div className='panel-body'>
                                <h5><span className='label label-success'>Answer</span></h5>
                                <p>All movies are cheap.</p>
                            </div>
                        </div>
                    </div>

                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading7">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href="#q7" aria-expanded="false" aria-controls="#q7">
                                    <span className='glyphicon glyphicon-question-sign'></span> I forgot my password, what do I do?
                                    </a>
                            </h4>
                        </div>

                        <div id="q7" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading7'>
                            <div className='panel-body'>
                                <h5><span className='label label-success'>Answer</span></h5>
                                <p>Send an email to moviemonster@support.com.</p>
                            </div>
                        </div>
                    </div>

                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading8">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href="#q8" aria-expanded="false" aria-controls="#q8">
                                    <span className='glyphicon glyphicon-question-sign'></span> What type of movies can I buy?
                                    </a>
                            </h4>
                        </div>

                        <div id="q8" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading8'>
                            <div className='panel-body'>
                                <h5><span className='label label-success'>Answer</span></h5>
                                <p>MovieMonster support all kinds of movies.</p>
                            </div>
                        </div>
                    </div>

                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading9">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href="#q9" aria-expanded="false" aria-controls="#q9">
                                    <span className='glyphicon glyphicon-question-sign'></span> How do I see my orders?
                                    </a>
                            </h4>
                        </div>

                        <div id="q9" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading9'>
                            <div className='panel-body'>
                                <h5><span className='label label-success'>Answer</span></h5>
                                <p>Login, and navigate to my account, then "My order details".</p>
                            </div>
                        </div>
                    </div>

                    <div className='panel panel-default'>
                        <div className='panel-heading' role='tab' id="heading10">
                            <h4 className='panel-title'>
                                <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href="#q10" aria-expanded="false" aria-controls="#q10">
                                    <span className='glyphicon glyphicon-question-sign'></span> How do I register?
                                    </a>
                            </h4>
                        </div>

                        <div id="q10" className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading10'>
                            <div className='panel-body'>
                                <h5><span className='label label-success'>Answer</span></h5>
                                <p>Click on register.</p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>

            //faq content fra db her
            </div>
        );
    }
}