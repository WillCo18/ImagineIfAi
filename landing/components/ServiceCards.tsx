import styles from './ServiceCards.module.css';

const services = [
    {
        id: 'leads',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        title: 'Lead Capture & Response',
        body: 'Respond fast. Capture leads you’d otherwise lose.',
        bullets: [
            'Instant personalised reply to new enquiries',
            'CRM auto-populated with the right fields',
            'Follow-ups queued with human approval',
            'Hot leads flagged to your team'
        ],
        outcome: 'Faster response, higher conversion, fewer missed leads.'
    },
    {
        id: 'financial',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
        ),
        title: 'Financial Data & BI Dashboards',
        body: 'See the business clearly. Make decisions sooner.',
        bullets: [
            'Connect accounting, CRM, and sales data',
            'Normalise fields so reporting actually works',
            'Exceptions flagged early (missing margin, spikes)',
            'Weekly insights, not month-end surprises'
        ],
        outcome: 'Clear numbers, quicker actions, fewer surprises.'
    },
    {
        id: 'social',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        ),
        title: 'Social Media Ops',
        body: 'Keep consistent output without living on social.',
        bullets: [
            'Monitor themes and feedback from your audience',
            'Draft on-brand posts from real events and offers',
            'Schedule across channels with approval gates',
            'Simple reporting on what performed'
        ],
        outcome: 'Consistency without burnout, content tied to revenue.'
    },
];

export default function ServiceCards() {
    return (
        <section className={styles.section} id="services">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Real automations we deploy (examples)</h2>
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
