import React, {useContext} from "react";
import TodoItem from "../TodoItem/TodoItem";
import classes from "./Todos.module.css";
import {TodosContext} from "../../store/todos-context";

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(({id, text}) =>
                <TodoItem
                    key={id}
                    text={text}
                    onRemoveTodo={() => todosCtx.onRemoveTodo(id)}
                />)
            }
        </ul>
    );
};

export default Todos