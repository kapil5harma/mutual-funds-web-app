import React, { Component } from 'react';
import {
  Switch,
  Route
  // , Redirect
} from 'react-router-dom';
import Categories from '../searchResults/Categories';
import Compare from '../compare/Compare';

class MainPage extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Categories} />>
        <Route path='/compare' exact component={Compare} />>
      </Switch>
    );
  }
}

export default MainPage;
