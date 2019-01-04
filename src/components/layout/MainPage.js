import React, { Component } from 'react';
import {
  Switch,
  Route
  // , Redirect
} from 'react-router-dom';
import Categories from '../searchResults/Categories';

class MainPage extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Categories} />>
        <Route path='/:name' exact component={Categories} />>
      </Switch>
    );
  }
}

export default MainPage;
