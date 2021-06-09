import React from "react";

const TodoForm: React.FC<{
    onAddTodo: (event: React.FormEvent) => void
}> = ({onAddTodo}) => {
    return (
        <form onSubmit={onAddTodo}>
            <label htmlFor="todo-input">Task:</label>
            <input type="text" id='todo-input' required/>
            <button>Add new task</button>
        </form>
    )
}

export default TodoForm;