import React from 'react';
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
    text: string;
    onRemoveTodo: () => void;
}> = ({text, onRemoveTodo}) => (
    <li className={classes.item}>
        {text}
        <button onClick={onRemoveTodo}>x</button>
    </li>
);

export default TodoItem;