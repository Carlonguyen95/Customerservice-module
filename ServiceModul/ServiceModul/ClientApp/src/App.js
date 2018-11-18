import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FAQ } from './components/FAQ';
import { Public } from './components/Public';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={FAQ} />
        <Route path='/public' component={Public} />
      </Layout>
    );
  }
}
