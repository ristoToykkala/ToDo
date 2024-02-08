import React, { useState } from 'react';

// Määrittelee komponentin odotetut arvot
interface TodoItemProps {
  id: number;
  text: string;
  description: string;
  done: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// Määrittelee TodoItem-komponentin
const TodoItem: React.FC<TodoItemProps> = ({ id, text, description, done, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(id); // Kutsuu onToggle-funktiota id:n mukaan
  };

  const handleDelete = () => {
    onDelete(id); // Kutsuu onDelete-funktiota id:n mukaan
  };

  // Renderöi TodoItem-komponentin
  return (
    <div className={`todo-item ${done ? 'completed' : ''}`}>
      <div>
        <strong>{text}</strong>: {description}
      </div>
      <div>
        {done ? (
          // Näyttää pelkästään poista vaihtoehdon tehdyissä tehtävissä
          <button onClick={handleDelete}>Poista</button>
        ) : (
          // Näyttää molemmat merkitse tehdyksi ja poista vaihtoehdot tekemättömissä tehtävissä
          <>
            <button onClick={handleToggle}>Merkitse tehdyksi</button>
            <button onClick={handleDelete}>Poista</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;