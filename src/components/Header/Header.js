import React, { Component } from 'react';
import './Header.css'
import { HashRouter as Router, Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className ="banner">
                <h1 className ="head">Find Gifs</h1>
                <Router>
                    <div className ="pageLinks">
                        <ul className ="linklist">
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