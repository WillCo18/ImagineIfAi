import styles from './QualificationSection.module.css';

export default function QualificationSection() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Is This Right for You?</h2>

                    <div className={styles.columns}>
                        <div className={styles.column}>
                            <div className={styles.iconWrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h3 className={styles.columnTitle}>We're the right fit if you're:</h3>
                            <ul className={styles.list}>
                                <li>A multi-site hospitality group, leisure operator, hotel, or attraction</li>
                                <li>Dealing with meaningful admin load and recurring workflows</li>
                                <li>Ready to invest in systems that actually work long-term</li>
                                <li>Looking for practical automation, not silver-bullet promises</li>
                            </ul>
                        </div>

                        <div className={`${styles.column} ${styles.columnAlt}`}>
                            <div className={styles.iconWrapperAlt}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <h3 className={styles.columnTitle}>We're not the right fit if you're:</h3>
                            <ul className={styles.list}>
                                <li>A single-site business looking for a cheap chatbot</li>
                                <li>After a quick fix without addressing data foundations</li>
                                <li>Not ready to document and maintain processes</li>
                                <li>Looking for the lowest price above all else</li>
                            </ul>
                        </div>
                    </div>

                    <p className={styles.note}>
                        We work with hospitality groups turning over up to eight figures—businesses with enough complexity
                        to benefit from proper infrastructure, but not so big they've already solved these problems.
                    </p>
                </div>
            </div>
        </section>
    );
}
