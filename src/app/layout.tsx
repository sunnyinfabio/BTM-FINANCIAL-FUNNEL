import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'BTM Financial | Interactive Solution Discovery & Diagnostic Funnel',
  description:
    'Discover tailored BTM Financial capabilities across Financial Advisory, Application Development, Quant Modeling, and Data Analytics.',
  keywords: [
    'BTM Financial',
    'Financial Advisory',
    'Data Analytics',
    'Application Services',
    'Structured Finance',
    'Quant Analytics',
    'CMBS Modeling',
    'Valuation Advisory'
  ],
  authors: [{ name: 'BTM Financial' }]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#f8fafc] text-[#171314]">{children}</body>
    </html>
  );
}
