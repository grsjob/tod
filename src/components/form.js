import React from 'react';

const Form = ({todos, inputValue, setTodos, setInputValue}) => {

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const addTodo = (e) => {
        e.preventDefault()
        if(inputValue){
            const newTodo = {
                id: Math.random().toString(30).substring(2,15),
                title: inputValue,
                complete: false,
                toggle: false
            }
            setTodos([...todos, newTodo])
            setInputValue('')
        }
    }
    return (
        <form onSubmit={addTodo}>
            <input value={inputValue} onChange={handleChange}/>
            <button>add todo</button>
        </form>
    );
};

export default Form;