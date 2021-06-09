import React from "react";
import TodoModel from '../../models/todos'
import TodoItem from "../TodoItem/TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{
    items: TodoModel[];
    onRemoveTodo: (removeItemId: string) => void;
}> = ({items, onRemoveTodo}) => {
    return (
        <ul className={classes.todos}>
            {items.map(({id, text}) =>
                <TodoItem
                    key={id}
                    text={text}
                    onRemoveTodo={() => onRemoveTodo(id)}
                />)
            }
        </ul>
    );
};

export default Todos