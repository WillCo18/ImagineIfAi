import styles from './ServiceCards.module.css';

const services = [
    {
        id: 'leads',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <polyline points="16 11 18 13 22 9" />
            </svg>
        ),
        title: 'Lead Capture & Response',
        body: 'Messy inboxes and slow replies were killing conversions. We built automated filters that qualified inbound leads and triggered instant, branded responses.',
        bullets: ['Automated qualification', 'Populated CRM data', 'Booked appointments'],
        outcome: 'Faster response, higher conversion',
    },
    {
        id: 'finance',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        title: 'Financial Data & BI Dashboards',
        body: 'Manual reporting took hours and was prone to error. We unified data from multiple sources into a single, real-time dashboard for clear decision making.',
        bullets: ['Integrated multiple sources', 'Created real-time P&L views', 'Automated reconciliations'],
        outcome: 'Clearer data, faster decisions',
    },
    {
        id: 'social',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.19 8.19 0 0 1 4.9 1.5" />
                <polyline points="16 5 12 9 8 5" />
            </svg>
        ),
        title: 'Social Media Ops',
        body: 'Managing content across platforms was a full-time job. We automated the distribution and engagement tracking, keeping brands active without the manual grind.',
        bullets: ['Handled cross-platform posting', 'Applied sentiment analysis', 'Automated engagement reports'],
        outcome: 'Consistent presence, zero manual effort',
    },
];

export default function ServiceCards() {
    return (
        <section className={styles.section} id="services">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Example automations deployed for clients</h2>
                    <p className={styles.subtitle}>
                        A few common builds. Not the full list.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.icon}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardBody}>{service.body}</p>
                                <ul className={styles.bulletList}>
                                    {service.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.cardFooter}>
                                <p className={styles.outcome}>{service.outcome}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
