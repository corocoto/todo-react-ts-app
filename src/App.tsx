import React from 'react';
import Todos from "./components/Todos/Todos";
import TodoForm from "./components/TodoForm/TodoForm";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <TodoForm />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
