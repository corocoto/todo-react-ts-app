import React from "react";
import TodoModel from '../../models/todos'

const Todos: React.FC<{items: TodoModel[]}> = ({items}) => {
    return (
        <ul>
            {items.map(({id, text}) => {
                return (
                    <li key={id}>{text}</li>
                );
            })}
        </ul>
    );
};

export default Todos