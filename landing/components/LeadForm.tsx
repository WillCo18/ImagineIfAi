'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadSchema, type LeadFormData } from '@/lib/leadSchema';
import styles from './LeadForm.module.css';

export default function LeadForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LeadFormData>({
        resolver: zodResolver(leadSchema),
    });

    const onSubmit = async (data: LeadFormData) => {
        setFormError(null);

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            const result = await response.json();

            if (result.ok) {
                setIsSubmitted(true);
            } else {
                setFormError('Something went wrong. Please try again.');
            }
        } catch {
            setFormError('Something went wrong. Please try again.');
        }
    };

    if (isSubmitted) {
        return (
            <section id="lead-form" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.success}>
                        <h2 className={styles.successHeading}>Thanks.</h2>
                        <p className={styles.successMessage}>We'll reply by email.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="lead-form" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Book a quick call</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <div className={styles.fieldGroup}>
                            <label htmlFor="name" className={styles.label}>
                                Name <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register('name')}
                                className={`${styles.input} ${errors.name ? styles.hasError : ''}`}
                                autoComplete="name"
                            />
                            {errors.name && (
                                <span className={styles.error}>{errors.name.message}</span>
                            )}
                        </div>

                        <div className={styles.fieldGroup}>
                            <label htmlFor="email" className={styles.label}>
                                Email <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email')}
                                className={`${styles.input} ${errors.email ? styles.hasError : ''}`}
                                autoComplete="email"
                            />
                            {errors.email && (
                                <span className={styles.error}>{errors.email.message}</span>
                            )}
                        </div>

                        <div className={styles.fieldGroup}>
                            <label htmlFor="company" className={styles.label}>
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                {...register('company')}
                                className={styles.input}
                                autoComplete="organization"
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <label htmlFor="message" className={styles.label}>
                                What would you like to improve? <span className={styles.required}>*</span>
                            </label>
                            <textarea
                                id="message"
                                {...register('message')}
                                className={`${styles.textarea} ${errors.message ? styles.hasError : ''}`}
                            />
                            {errors.message && (
                                <span className={styles.error}>{errors.message.message}</span>
                            )}
                        </div>

                        <div className={styles.fieldGroup}>
                            <div className={styles.checkboxGroup}>
                                <input
                                    type="checkbox"
                                    id="consent"
                                    {...register('consent')}
                                    className={styles.checkbox}
                                />
                                <label htmlFor="consent" className={styles.checkboxLabel}>
                                    I agree to be contacted about this enquiry.
                                </label>
                            </div>
                            {errors.consent && (
                                <span className={styles.error}>{errors.consent.message}</span>
                            )}
                        </div>

                        {formError && (
                            <div className={styles.formError}>{formError}</div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={styles.submitBtn}
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
