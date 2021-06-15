import TodoModel from "../models/todos";
import React from "react";

export type TodosContextType = {
    items: TodoModel[];
    onAddTodo: (event: React.FormEvent) => void;
    onRemoveTodo: (id: string) => void;
};