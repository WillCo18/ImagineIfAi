import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ServiceCards from '@/components/ServiceCards';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import QualificationSection from '@/components/QualificationSection';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <ServiceCards />
      <HowItWorks />
      <TrustSection />
      <QualificationSection />
      <CTASection />
      <ContactForm />
    </main>
  );
}
