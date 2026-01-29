import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <Image
                            src="/logo.png"
                            alt="Imagine-If.AI Logo"
                            width={140}
                            height={35}
                            className={styles.logo}
                        />
                        <p className={styles.tagline}>
                            Practical AI automation for hospitality and local SMEs.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Quick Links</h4>
                            <ul className={styles.linkList}>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#approach">Approach</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Contact</h4>
                            <ul className={styles.linkList}>
                                <li>
                                    <a href="mailto:hello@imagine-if.ai">
                                        hello@imagine-if.ai
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Imagine-If.AI. All rights reserved.
                    </p>
                    <p className={styles.privacy}>
                        We don't use cookies or track you on this site.
                    </p>
                </div>
            </div>
        </footer>
    );
}
