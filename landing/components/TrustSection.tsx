import styles from './TrustSection.module.css';

const trustItems = [
    {
        id: 'tools',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        title: 'Built Around Your Tools',
        description: 'We integrate with the systems you already use. No rip-and-replace.',
    },
    {
        id: 'approval',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <polyline points="17 11 19 13 23 9" />
            </svg>
        ),
        title: 'Human Approval Where It Matters',
        description: 'Automation handles the routine. You keep control of the decisions.',
    },
    {
        id: 'audit',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        title: 'Full Audit Trail',
        description: 'Every change documented. Complete handover when we leave.',
    },
    {
        id: 'gdpr',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
        title: 'GDPR-Compliant',
        description: 'Your data handled responsibly. Privacy and security by design.',
    },
];

export default function TrustSection() {
    return (
        <section className={styles.section} id="approach">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Security First</h2>
                    <p className={styles.subtitle}>
                        Boring, practical trust cues. No testimonials needed—just how we work.
                    </p>
                </div>

                <div className={styles.grid}>
                    {trustItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={styles.item}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.icon}>{item.icon}</div>
                            <div className={styles.content}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <p className={styles.itemDescription}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
