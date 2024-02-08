import React from 'react';
import TodoItem from './TodoItem';

// Määrittelee tehtävälle tarkoitetut arvot
interface Todo {
  id: number;
  text: string;
  description: string;
  done: boolean;
}

// Määrittelee todolistalle rajapinnan
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// Määrittelee komponentin
const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          description={todo.description}
          done={todo.done}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;