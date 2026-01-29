import styles from './PhilosophySection.module.css';

export default function PhilosophySection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* 1. The Stance */}
                <div className={styles.stance}>
                    <h2 className={styles.headline}>
                        We don't sell "AI".<br />
                        We solve <span className={styles.highlight}>operational problems</span>.
                    </h2>
                    <p className={styles.subline}>
                        Most businesses <span className={styles.strike}>drown in hype</span>
                        but starve for practical application. We cut through the noise to build
                        reliable automation that your team will actually use.
                    </p>
                </div>

                {/* 2. The Workflow Stream (Infographic) */}
                <div className={styles.workflow}>
                    {/* Node 1: Input */}
                    <div className={styles.node}>
                        <div className={styles.nodeIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                        </div>
                        <h3 className={styles.nodeTitle}>Repetitive Admin</h3>
                        <p className={styles.nodeDesc}>Manual data entry & noise</p>
                    </div>

                    {/* Arrow */}
                    <div className={styles.arrow}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>

                    {/* Node 2: Automation + Human Loop */}
                    <div className={styles.node}>
                        <div className={styles.nodeIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <line x1="12" y1="19" x2="12" y2="23" />
                                <line x1="8" y1="23" x2="16" y2="23" />
                            </svg>
                        </div>
                        <h3 className={styles.nodeTitle}>Human-in-the-Loop</h3>
                        <p className={styles.nodeDesc}>Automation + Judgement</p>
                    </div>

                    {/* Arrow */}
                    <div className={styles.arrow}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>

                    {/* Node 3: Outcome */}
                    <div className={styles.node}>
                        <div className={styles.nodeIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                <polyline points="17 6 23 6 23 12" />
                            </svg>
                        </div>
                        <h3 className={styles.nodeTitle}>Value Focus</h3>
                        <p className={styles.nodeDesc}>Growth & Strategy</p>
                    </div>
                </div>

                {/* 3. The Roots */}
                <div className={styles.roots}>
                    <span className={styles.badge}>Built by Operators</span>
                    <p className={styles.rootsText}>
                        With deep roots in hospitality and service operations, we understand that technology must serve the process, not the other way around. From quick wins to full-scale infrastructure, we design for stability and adoption.
                    </p>
                    <a href="#contact" className={styles.cta}>
                        Start with a clear first step &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
