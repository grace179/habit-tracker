import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo"><i class="fas fa-cloud"></i></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;