import type { Metadata } from 'next';
import {
  Crimson_Text,
  Geist,
  Geist_Mono,
  Instrument_Sans,
} from 'next/font/google';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { AuthProvider } from './context/AuthContext';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const crimsonText = Crimson_Text({
  variable: '--font-crimson-text',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'AfterLoving - A better relationship starts with better intimacy',
  description:
    'Enhance your relationship through better communication and intimacy with AfterLoving.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimsonText.variable} ${instrumentSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <AuthProvider>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
