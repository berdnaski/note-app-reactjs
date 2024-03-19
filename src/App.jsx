import React from 'react'
import styles from "./App.module.css"
import Home from "./pages/Home"

function App() {
  return (
      <div className={styles.wrapper}>
        <Home />
      </div>
  )
}

export default App