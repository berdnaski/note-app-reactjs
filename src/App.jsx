import React from 'react'
import Header from "./components/Header/Header.jsx"
import styles from "./App.module.css"
import { Note } from './components/Note/Note.jsx'
import { Section } from './components/Section/Section.jsx'
import { Plus } from '@phosphor-icons/react';
import { Footer } from './components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
          <Section />
          <div>
            <Note />
            <Note />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default App