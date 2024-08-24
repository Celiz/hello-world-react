import React, { useState } from 'react';
import styles from './Todo.module.css';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Tareas</h1>
      
      <form onSubmit={addTask} className={styles.form}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Agregar Tarea
        </button>
      </form>
      
      <ul className={styles.taskList}>
        {tasks.map(task => (
          <li 
            key={task.id} 
            className={`${styles.taskItem} ${task.completed ? styles.taskItemCompleted : ''}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className={styles.checkbox}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;