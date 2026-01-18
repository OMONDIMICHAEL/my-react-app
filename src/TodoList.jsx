import React, {useReducer, useState} from "react";

// define actions
const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
};

// reducer function
function reducer(todos,action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, {id: Date.now(), text: action.payload, completed:false}];
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed } : todo );
        case ACTIONS.DELETE_TODO:
            return todos.filter( todo => todo.id !== action.payload);
        default:
            return todos;
    }
}

const TodoList = () =>{
    const [todos, dispatch] = useReducer(reducer, []);
    const [newTodo, setNewTodo] = useState('');

    const handleAdd = () =>{
        if (newTodo.trim() !=='') {
            dispatch({type: ACTIONS.ADD_TODO, payload: newTodo});
            setNewTodo('');
        }
    };
    return(
        <div>
            <h2>Todo List with useReducer</h2>
            <input type="text" name="" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add new Todo" id="" />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo) =>(
                    <li key={todo.id}>
                        <input type="checkbox" name="" checked={todo.completed} id="" onChange={() => dispatch({ type : ACTIONS.TOGGLE_TODO, payload: todo.id})} />
                        <span style={{textDecoration: todo.completed ? 'line-through' : 'none' }}> {todo.text} </span>
                        <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: todo.id})}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default TodoList;