import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import './globals.css';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import Script from 'next/script';


const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'UUID GENERATOR',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8663662446032541'
        crossOrigin="anonymous"
        />
        <NuqsAdapter>
        {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
