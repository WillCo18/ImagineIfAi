import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import '@/styles/globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Imagine-If.AI | Practical AI Automation for SMEs',
  description: 'Built for adoption, not demos. We help ambitious SMEs implement practical AI automation that removes repetitive work while keeping humans in the loop.',
  openGraph: {
    title: 'Imagine-If.AI | Practical AI Automation for SMEs',
    description: 'Built for adoption, not demos. We help ambitious SMEs implement practical AI automation that removes repetitive work while keeping humans in the loop.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Imagine-If.AI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={barlow.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
