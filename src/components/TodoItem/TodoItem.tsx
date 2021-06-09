import React from 'react';
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{text: string}> = ({text}) => <li className={classes.item}>{text}</li>;

export default TodoItem;