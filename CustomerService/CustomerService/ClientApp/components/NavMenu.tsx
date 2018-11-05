import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>Carlos Customer Service</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/ask'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-edit'></span> Ask a Question
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/FAQ'} activeClassName='active'>
                                <span className='glyphicon glyphicon-question-sign'></span> FAQ
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
