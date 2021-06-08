type Todo = {
  text: string;
  complete: boolean;
  id: number;
};

type ToggleComplete = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type deleteTodo = (newTodo: todo) => void;

type editTodo = {
  toggleComplete: ToggleComplete;
  deleteTodo: deleteTodo;
}


type TodoListProps = editTodo & {
  todos: Array<Todo>;
}


type TodoListItemProps = editTodo & {
  todo: Todo;
}