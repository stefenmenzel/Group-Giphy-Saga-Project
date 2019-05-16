import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Search from '../Search/Search.js';
import Favorites from '../Favorites/Favorites.js';
import Header from '../Header/Header.js';
class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Router>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/favorites">Checkout</Link>
            </li>
          </ul>
            <Route exact path="/" component={Search} />
            <Route exact path="/favorites" component={Favorites} />
              
        </Router>
      </div>
    );
  }
  
}

export default App;
