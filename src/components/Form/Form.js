import { useState } from 'react';
import styles from './Form.module.css';

export const Form = () => {
  const [name, setName] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setWelcomeMessage(`Hola, ${name}!`);
        setName('');
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Formulario de Bienvenida</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
      
      {welcomeMessage && (
        <p className={styles.message}>{welcomeMessage}</p>
      )}
    </div>
  );
};

export default Form;