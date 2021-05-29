import React from 'react';
import Todos from "./components/Todos/Todos";
import TodoModel from './models/todos';

const todoItems = [
    new TodoModel('Learn React'),
    new TodoModel('Learn TypeScript')
];

function App() {
  return (
    <div>
      <Todos items={todoItems}/>
    </div>
  );
}

export default App;
