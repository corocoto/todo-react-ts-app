import React from "react";

const Todos: React.FC<{items: string[]}> = ({items}) => {
    return (
        <ul>
            {items.map(item => {
                return (
                    <li key={item}>{item}</li>
                );
            })}
        </ul>
    );
};

export default Todos