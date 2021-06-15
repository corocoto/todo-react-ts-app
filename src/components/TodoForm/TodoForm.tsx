import React, {useContext} from "react";
import classes from './TodoForm.module.css';
import {TodosContext} from "../../store/todos-context";

const TodoForm: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <form className={classes.form} onSubmit={todosCtx.onAddTodo}>
            <label htmlFor="todo-input">Task:</label>
            <input type="text" id='todo-input' required/>
            <button>Add new task</button>
        </form>
    )
}

export default TodoForm;