import React from 'react'
import Header from "./components/Header/Header.jsx"
import styles from "./App.module.css"
import { Aside } from './components/Aside/Aside.jsx'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Aside />
      </div>
    </div>
  )
}

export default App