import React from "react";
import "./TodoListItem.css";


export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
        <input type="button" onClick={()=> deleteTodo(todo)} value = "X" className="deleteButton" title="delete"/>
    </li>
  );
};
