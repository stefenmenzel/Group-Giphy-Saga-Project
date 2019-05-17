import React, { Component } from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';

import Header from '../Header/Header.js';

import SearchForm from '../SearchForm/SearchForm.js';
import FavoritesDisplay from '../FavoritesDisplay/FavoritesDisplay.js';
class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Router>
            <Route exact path="/" component={SearchForm} />
            <Route exact path="/favorites" component={FavoritesDisplay} />
              
        </Router>
      </div>
    );
  }
  
}

export default App;
