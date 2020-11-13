import React, { memo } from 'react';

const HabbitAddForm = memo(
    (props) => {
        const formRef = React.createRef();
        const inputRef = React.createRef();
    
        const onSubmit = event =>{
            event.preventDefault();
            console.log(inputRef.current.value);
            const name = inputRef.current.value;
            name && props.onAdd(name);
            // this.inputRef.current.value = '';
            formRef.current.reset();
        };
    
        return (
            <form 
            ref={formRef}
            className="add-form" onSubmit={onSubmit}>
                <input
                ref={inputRef}
                type="text" 
                className="add-input"
                placeholder="만들고 싶은 습관을 적어주세요!"/>
                <button className="add-button">Add</button>
            </form>
        );
    
        }
);


export default HabbitAddForm;