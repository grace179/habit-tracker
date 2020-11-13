import React, { Component } from 'react';

class Habit extends Component {

    handleIncrement = ()=> {
        this.props.onIncrement(this.props.habit);
    }

    handleDecrement = ()=> {
        this.props.onDecrement(this.props.habit);
    }
    handleDelete = ()=> {
        this.props.onDelete(this.props.habit);
    }

    render() {
        
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
                <div className="left">
                    <span className="habit-name">{name}</span>
                    <span className="habit-count">{count}</span>
                </div>
                <div className="right">
                    <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                        <i class="fas fa-plus-square"></i>
                    </button>
                    <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                        <i class="fas fa-minus-square"></i>
                    </button>
                    <button className="habit-button habit-delete"
                    onClick={this.handleDelete}>
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </li>
            );
    }
}

export default Habit;