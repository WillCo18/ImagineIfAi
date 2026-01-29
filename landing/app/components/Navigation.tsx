'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Navigation.module.css';

const navLinks = [
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'approach', label: 'Approach', href: '#approach' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);

        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navHeight = 72;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={styles.nav} role="navigation" aria-label="Main navigation">
            <div className={styles.container}>
                <a href="/" className={styles.logoLink} aria-label="Imagine-If.AI Home">
                    <Image
                        src="/logo.png"
                        alt="Imagine-If.AI Logo"
                        width={160}
                        height={40}
                        className={styles.logo}
                        priority
                    />
                </a>

                <button
                    className={styles.toggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="nav-menu"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    <span className={isMenuOpen ? styles.toggleLineOpen1 : ''} />
                    <span className={isMenuOpen ? styles.toggleLineOpen2 : ''} />
                    <span className={isMenuOpen ? styles.toggleLineOpen3 : ''} />
                </button>

                <ul
                    id="nav-menu"
                    className={`${styles.links} ${isMenuOpen ? styles.linksOpen : ''}`}
                    role="menubar"
                >
                    {navLinks.map((link) => (
                        <li key={link.id} role="none">
                            <a
                                href={link.href}
                                className={styles.link}
                                onClick={(e) => handleNavClick(e, link.href)}
                                role="menuitem"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
