import React from 'react';
import Item from "./Item";


const ListItem = ({todos, setTodos}) => {
    const remove = (id) => {
        setTodos(todos.filter(todo => todo.id !==id))
    }
    return (
        <ul>
            {
              todos.map(todo =>
              <Item key={todo.id} title={todo.title} remove={remove} id={todo.id}/>)
            }
        </ul>
    );
};

export default ListItem;