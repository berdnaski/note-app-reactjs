import styles from "./Footer.module.css";
import { Plus } from '@phosphor-icons/react';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <button><Plus size={45} /></button>
        </footer>
    );
}
