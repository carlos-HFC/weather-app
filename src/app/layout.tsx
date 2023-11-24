import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';

import '@/style/main.min.css';

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Generated by create next app',
  manifest: "/site.webmanifest",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: "#fff"
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
