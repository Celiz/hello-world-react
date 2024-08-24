import { useState } from "react";
import styles from "./Counter.module.css";


export const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter {count}</h1>
            <button className={styles.button} onClick={() => setCount(count + 1)}>Sumar</button>
            <button className={styles.button} onClick={() => setCount(count - 1)}>Restar</button>
        </>
    );
};

export default Counter;