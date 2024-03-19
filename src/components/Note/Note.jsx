import styles from "./Note.module.css"
import { Trash, Pencil, Plus } from "@phosphor-icons/react";

export function Note() {
    return (
        <div className={styles.note}>
            <section className={styles.section}>
                <div className={styles.sectionContainer}>
                    <div className={styles.containerLogo}>
                        <img className={styles.logo} src="http://github.com/berdnaski.png" />
                    </div>
                    <div className={styles.information}>
                        <h1>Teste</h1>
                        <p>suahsuahsuahusah</p>
                    </div>
                
                    <div className={styles.icons}>
                        <Trash className={styles.trash} size={20} />
                        <Pencil className={styles.pencil} size={20} />
                    </div>
                </div>
            </section>
        </div>
    )
}