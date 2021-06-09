import React from "react";
import TodoModel from '../../models/todos'
import TodoItem from "../TodoItem/TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{items: TodoModel[]}> = ({items}) => {
    return (
        <ul className={classes.todos}>
            {items.map(({id, text}) => <TodoItem key={id} text={text} />)}
        </ul>
    );
};

export default Todos