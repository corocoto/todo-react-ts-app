import React from "react";
import TodoModel from '../../models/todos'
import TodoItem from "../TodoItem/TodoItem";

const Todos: React.FC<{items: TodoModel[]}> = ({items}) => {
    return (
        <ul>
            {items.map(({id, text}) => <TodoItem key={id} text={text} />)}
        </ul>
    );
};

export default Todos