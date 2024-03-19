import styles from "./Section.module.css"

export function Section() {
    return (
        <aside className={styles.aside}>
            <button className={styles.button}>All</button>
            <button className={styles.button}>Important</button>
        </aside>
    )
}