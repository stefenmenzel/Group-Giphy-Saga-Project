import React, { Component } from 'react';
import './Header.css'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div>
                <h1>Find Gifs</h1>
                <Router>
                    <div className ="pageLinks">
                        <ul>
                            <li>
                                <Link to="/">Search</Link>
                            </li>
                            <li>
                                <Link to="/favorites">Favorite</Link>
                            </li>
                        </ul>
                    </div>
                </Router>
            </div>
        );
    }
        
}

export default Header;