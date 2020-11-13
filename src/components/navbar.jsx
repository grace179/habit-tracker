import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo"><i class="fas fa-cloud"></i></i>
                <span>Habit Tracker</span>
                <div className="question">
                    진행 중인 습관의 갯수는? 
                    <span className="navbar-count">{this.props.totalCount}</span>

                </div>
            </nav>
        );
    }
}

export default Navbar;