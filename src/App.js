import React, {useState} from 'react';
import ListItem from "./components/ListItem";
import Form from "./components/form";



const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])
    return (
        <div>
            <Form inputValue={inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos}/>
            <ListItem todos={todos} setTodos={setTodos}/>
        </div>
    );
};

export default App;