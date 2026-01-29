import styles from './HowItWorks.module.css';

const steps = [
    {
        number: 1,
        title: 'Clarify',
        description: 'We start with a call to understand your operations and identify where automation will have real impact.',
    },
    {
        number: 2,
        title: 'Build',
        description: 'We design and implement solutions your team will actually use, with clear handover and documentation.',
    },
    {
        number: 3,
        title: 'Improve',
        description: 'We refine based on real usage, fix what breaks, and help you scale what works.',
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>How it works</h2>

                <div className={styles.steps}>
                    {steps.map((step) => (
                        <div key={step.number} className={styles.step}>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
