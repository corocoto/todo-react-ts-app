import React from 'react';

const TodoItem: React.FC<{text: string}> = ({text}) => <li>{text}</li>;

export default TodoItem;