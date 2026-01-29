'use client';

import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    const scrollToContact = (preselect?: string) => {
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
        <section className={styles.hero} id="hero">
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        Practical AI Automation for Hospitality & Local SMEs
                    </h1>
                    <p className={styles.subline}>
                        Automation that removes admin. Humans keep the judgement.
                    </p>
                    <div className={styles.ctas}>
                        <a
                            href="#contact"
                            className={styles.btnPrimary}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToContact('foundation-review');
                            }}
                        >
                            Request a Foundation Review
                        </a>
                        <a
                            href="#contact"
                            className={styles.btnSecondary}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToContact('quick-chat');
                            }}
                        >
                            Book a Quick Chat
                        </a>
                    </div>
                </div>

                {/* Logo as hero visual */}
                <div className={styles.visual}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/logo.png"
                            alt="Imagine-If.AI"
                            width={400}
                            height={400}
                            className={styles.heroLogo}
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Background gradient */}
            <div className={styles.bgGradient} />
        </section>
    );
}
