import React, {useState} from "react";
import TodoModel from '../models/todos';
import {TodosContextType} from "./todos-context.types";

export const TodosContext = React.createContext<TodosContextType>({
   items: [],
   onAddTodo: (event: React.FormEvent) => {},
   onRemoveTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
    const [todoItems, setTodoItems] = useState<TodoModel[]>([]);

    const addTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const { elements: formElements }= event.target as HTMLFormElement;
        const {value} = formElements[0] as HTMLInputElement;
        const newTodoItem = new TodoModel(value);
        setTodoItems((currentTodoItems) => {
            return currentTodoItems.concat(newTodoItem);
        });
    };

    const removeTodoHandler = (removeItemId: string) => {
        setTodoItems((currentTodoItems) => {
            return currentTodoItems.filter(todoItem => todoItem.id !== removeItemId);
        });
    };

    const contextValue: TodosContextType = {
        items: todoItems,
        onAddTodo: addTodoHandler,
        onRemoveTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
    )
};

export default TodosContextProvider;