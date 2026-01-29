'use client';

import styles from './CTASection.module.css';

export default function CTASection() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const navHeight = 72;
            const targetPosition = contactSection.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Ready to Remove the Admin Load?</h2>
                    <p className={styles.subtitle}>
                        Start with a conversation. No pressure, no obligation—just a chance to explore
                        whether we're the right fit for your business.
                    </p>
                    <a
                        href="#contact"
                        className={styles.button}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToContact();
                        }}
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
}
