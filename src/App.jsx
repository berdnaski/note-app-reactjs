import React from 'react'
import Header from "./components/Header/Header.jsx"
import styles from "./App.module.css"
import { Note } from './components/Note/Note.jsx'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
          <Note />
      </div>
    </div>
  )
}

export default App