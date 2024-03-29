// App.js
import React from 'react';
import styles from "./App.module.css";
import AppRoutes from './Routes/Routes';

function App() {
  return (
    <div className={styles.container}>
        <AppRoutes />
    </div>
  );
}

export default App;
