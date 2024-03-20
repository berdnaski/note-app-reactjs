import React from 'react';
import styles from "./Footer.module.css";
import { Plus } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.link} to="/note"><Plus size={45} /></Link>
        </footer>
    );
}

export default Footer;
