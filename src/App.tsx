import React, {useState} from 'react';
import Todos from "./components/Todos/Todos";
import TodoModel from './models/todos';
import TodoForm from "./components/TodoForm/TodoForm";



function App() {
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

  return (
    <div>
      <TodoForm onAddTodo={addTodoHandler} />
      <Todos items={todoItems} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
