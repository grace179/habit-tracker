import React, { Component } from 'react';
import Habit from './habit';
import HabbitAddForm from './habbitAddForm';


class Habits extends Component {
    
    handleAdd = name =>{
        this.props.onAdd(name);
    }
    render() {

        const habits = this.props.habits;
        const onIncrement = this.props.onIncrement;
        const onDecrement = this.props.onDecrement;
        const onDelete = this.props.onDelete;


        return (
            <>
            <HabbitAddForm onAdd={this.handleAdd}/>
            <ul>
                {habits.map(habit => (
                    <Habit key = {habit.id} 
                    habit={habit} 
                    onIncrement={onIncrement} 
                    onDecrement={onDecrement}
                    onDelete={onDelete}/>
                ))}
            </ul>
            </>
            );
    }
}

export default Habits;