import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Headline */}
                    <h1 className={styles.headline}>
                        Practical AI Automation for ambitious SMEs
                    </h1>

                    {/* Subheadline */}
                    <p className={styles.subheadline}>
                        Built for adoption, not demos. Humans stay in the loop.
                    </p>

                    {/* CTAs */}
                    <div className={styles.actions}>
                        <a href="#lead-form" className={styles.btnPrimary}>
                            Book a quick call
                        </a>
                        <a href="#how-it-works" className={styles.secondaryLink}>
                            See how it works →
                        </a>
                    </div>
                </div>

                {/* MP4 Header Video */}
                <div className={styles.videoWrapper}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={styles.headerVideo}
                    >
                        <source src="/Whisk2IIA.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
}
