import React from 'react';
import styles from "./Footer.module.css";
import { Plus } from '@phosphor-icons/react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <button><Plus size={45} /></button>
        </footer>
    );
}

export default Footer;
