import React, { Component } from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';

import Favorites from '../Favorites/Favorites.js';
import Header from '../Header/Header.js';
import Results from '../Results/Results.js';
import SearchForm from '../SearchForm/SearchForm.js';
class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Router>
            <Route exact path="/" component={SearchForm} />
            <Route exact path="/favorites" component={Favorites} />
            <Results />    
        </Router>
      </div>
    );
  }
  
}

export default App;
