import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Ask } from './components/Ask';
import { FAQ } from './components/FAQ';
import { Public } from './components/Public';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/ask' component={Ask} />
    <Route path='/public' component={Public} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/FAQ' component={FAQ} />
</Layout>;
