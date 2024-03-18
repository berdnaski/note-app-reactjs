import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>My Notes</h1>
        <img className={styles.logo} src="http://github.com/berdnaski.png" />
      </div>
    </header>
  )
}

export default Header