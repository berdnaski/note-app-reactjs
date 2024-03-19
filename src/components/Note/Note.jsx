import styles from "./Note.module.css"

export function Note() {
    return (
        <div className={styles.note}>
            <aside className={styles.aside}>
                <button className={styles.button}>All</button>
                <button className={styles.button}>Important</button>
            </aside>

            <section className={styles.section}>
                <img className={styles.logo} src="http://github.com/berdnaski.png" />
                <div className={styles.information}>
                    <h1>Teste</h1>
                    <p>suahsuahsuahusah</p>
                </div>
            </section>
        </div>
    )
}