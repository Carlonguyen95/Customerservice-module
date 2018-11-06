import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FAQ } from './components/FAQ';
import { Public } from './components/Public';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/public' component={Public} />
        <Route path='/faq' component={FAQ} />
      </Layout>
    );
  }
}
