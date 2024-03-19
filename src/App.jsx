import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
