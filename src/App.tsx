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

  return (
    <div>
      <TodoForm onAddTodo={addTodoHandler} />
      <Todos items={todoItems}/>
    </div>
  );
}

export default App;
