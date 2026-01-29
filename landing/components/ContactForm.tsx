'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData, getInquiryLabel } from '@/lib/validation';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            inquiryType: undefined,
            message: '',
            honeypot: '',
        },
    });

    const inquiryType = watch('inquiryType');

    const onSubmit = async (data: ContactFormData) => {
        // Honeypot check - if filled, silently succeed
        if (data.honeypot) {
            setSubmitStatus('success');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    timestamp: new Date().toISOString(),
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                reset();
            } else {
                setSubmitStatus('error');
                setErrorMessage(result.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage('Failed to submit form. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <section className={styles.section} id="contact">
                <div className={styles.container}>
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h2 className={styles.successTitle}>Thanks for reaching out!</h2>
                        <p className={styles.successText}>
                            We've received your inquiry and will be in touch within 24 hours.
                            Check your inbox for a confirmation email.
                        </p>
                        <button
                            type="button"
                            className={styles.resetButton}
                            onClick={() => setSubmitStatus('idle')}
                        >
                            Send another message
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Get in Touch</h2>
                    <p className={styles.subtitle}>
                        Tell us about your business and what you're looking to achieve.
                        We'll get back to you within 24 hours.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
                    {/* Honeypot field - hidden from humans */}
                    <div className={styles.honeypot} aria-hidden="true">
                        <input
                            type="text"
                            {...register('honeypot')}
                            tabIndex={-1}
                            autoComplete="off"
                        />
                    </div>

                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>
                                Your Name <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register('name')}
                                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                placeholder="Jane Smith"
                                disabled={isSubmitting}
                            />
                            {errors.name && (
                                <span className={styles.error} role="alert">{errors.name.message}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="businessName" className={styles.label}>
                                Business Name <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="businessName"
                                {...register('businessName')}
                                className={`${styles.input} ${errors.businessName ? styles.inputError : ''}`}
                                placeholder="The Hospitality Group Ltd"
                                disabled={isSubmitting}
                            />
                            {errors.businessName && (
                                <span className={styles.error} role="alert">{errors.businessName.message}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="jobTitle" className={styles.label}>
                                Job Title <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="jobTitle"
                                {...register('jobTitle')}
                                className={`${styles.input} ${errors.jobTitle ? styles.inputError : ''}`}
                                placeholder="Operations Director"
                                disabled={isSubmitting}
                            />
                            {errors.jobTitle && (
                                <span className={styles.error} role="alert">{errors.jobTitle.message}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>
                                Email Address <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email')}
                                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                placeholder="jane@company.com"
                                disabled={isSubmitting}
                            />
                            {errors.email && (
                                <span className={styles.error} role="alert">{errors.email.message}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>
                                Phone Number <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                {...register('phone')}
                                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                                placeholder="+44 7700 900000"
                                disabled={isSubmitting}
                            />
                            {errors.phone && (
                                <span className={styles.error} role="alert">{errors.phone.message}</span>
                            )}
                        </div>
                    </div>

                    <div className={styles.formGroupFull}>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.label}>
                                What would you like to discuss? <span className={styles.required}>*</span>
                            </legend>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        value="quick-chat"
                                        {...register('inquiryType')}
                                        className={styles.radioInput}
                                        disabled={isSubmitting}
                                    />
                                    <span className={styles.radioText}>Have a quick chat</span>
                                </label>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        value="foundation-review"
                                        {...register('inquiryType')}
                                        className={styles.radioInput}
                                        disabled={isSubmitting}
                                    />
                                    <span className={styles.radioText}>Request a formal Foundation Review</span>
                                </label>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        value="other"
                                        {...register('inquiryType')}
                                        className={styles.radioInput}
                                        disabled={isSubmitting}
                                    />
                                    <span className={styles.radioText}>Something else</span>
                                </label>
                            </div>
                            {errors.inquiryType && (
                                <span className={styles.error} role="alert">{errors.inquiryType.message}</span>
                            )}
                        </fieldset>
                    </div>

                    {inquiryType === 'other' && (
                        <div className={styles.formGroupFull}>
                            <label htmlFor="message" className={styles.label}>
                                Tell us more
                            </label>
                            <textarea
                                id="message"
                                {...register('message')}
                                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                                placeholder="What would you like to discuss?"
                                rows={4}
                                disabled={isSubmitting}
                            />
                            {errors.message && (
                                <span className={styles.error} role="alert">{errors.message.message}</span>
                            )}
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className={styles.errorBanner} role="alert">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                                <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    <div className={styles.submitWrapper}>
                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className={styles.spinner} />
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                        <p className={styles.privacy}>
                            We respect your privacy. Your information is only used to respond to your inquiry.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}
