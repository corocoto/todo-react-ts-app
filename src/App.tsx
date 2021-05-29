import React from 'react';
import Todos from "./components/Todos/Todos";

const todosItems = [
    'Learn React',
    'Learn TypeScript'
];

function App() {
  return (
    <div>
      <Todos items={todosItems}/>
    </div>
  );
}

export default App;
