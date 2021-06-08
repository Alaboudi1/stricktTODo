import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import "./addTodoForm.css"

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos?.map(todo => {
      if (todo.id === selectedTodo.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo: deleteTodo = todoToDelete => {
    // remove the todo from the todo list
    const index = todos.indexOf(todoToDelete);
    if (index > -1) {
      todos.splice(index, 1);
    }
    setTodos(todos);
  }
  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false, id: todos.length + 1 }]);
  };

  return (
    <div className="container">
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;




// const deleteTodo: deleteTodo = deleteTodoId => {
//   const index = todos.findIndex(d => d.id === deleteTodoId);
//   if (index > -1) {
//     todos.splice(index, 1);
//   }
//     setTodos(todos);

// }