import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

interface Todo {
  id: number;
  text: string;
  description: string;
  done: boolean;
}

// Määrittelee App-komponentin
const App: React.FC = () => {
  // Määrittää tilamuuttujat tehtäville ja lisätiedoille
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');

  // Event handler tekstikentän arvon muuttujille
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Event handler kuvauskentän arvon muuttujille
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionValue(e.target.value);
  };

  // Event handler uuden tehtävän lisäämiselle
  const handleAddTodo = () => {
    // Tarkastaa että tekstikenttä ei ole tyhjä
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(), // Uniikki ID kullekkin tehtävälle
        text: inputValue,
        description: descriptionValue,
        done: false, 
      };

      // Päivittää tehtävät, kun lisätään uusi
      setTodos(prevTodos => [...prevTodos, newTodo]);
      // Tyhjentää tekstikentät, kun uusi tehtävä on lisätty
      setInputValue('');
      setDescriptionValue('');
    }
  };

  // Event handler tehtävän poistamiseen
  const handleDeleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // Event handler tehtävän tilan muutokselle
  const handleToggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Filteröi erikseen tehdyt ja tekemättömät tehtävät
  const completedTodos = todos.filter(todo => todo.done);
  const incompleteTodos = todos.filter(todo => !todo.done);

  return (
    <div className="App">
      <h1>ToDo</h1>
      <div className="container">
        <div className="todo-container">
          <div className="todo-task">
            <label htmlFor="todoInput">Tehtävä:</label>
            <input id="todoInput" type="text" value={inputValue} onChange={handleInputChange} />
          </div>
          
          <div className="todo-task">
            <label htmlFor="descriptionInput">Lisätiedot:</label>
            <input id="descriptionInput" type="text" value={descriptionValue} onChange={handleDescriptionChange} />
            <button onClick={handleAddTodo}>Lisää tehtävä</button>
          </div>
        </div>

        <div className="todo-container">
          <h2>Tehtävät</h2>
          <TodoList todos={incompleteTodos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
        </div>
  
        <div className="todo-container">
          <h2>Suoritetut tehtävät</h2>
          <TodoList todos={completedTodos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
        </div>
      </div>
    </div>
  
    

  );
};

export default App;
