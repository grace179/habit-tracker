import React, { Component } from 'react';
import Habit from './habit';


class Habits extends Component {
    
    render() {

        const habits = this.props.habits;
        const onIncrement = this.props.onIncrement;
        const onDecrement = this.props.onDecrement;
        const onDelete = this.props.onDelete;


        return (
            <ul>
                {habits.map(habit => (
                    <Habit key = {habit.id} 
                    habit={habit} 
                    onIncrement={onIncrement} 
                    onDecrement={onDecrement}
                    onDelete={onDelete}/>
                ))}
            </ul>
            );
    }
}

export default Habits;