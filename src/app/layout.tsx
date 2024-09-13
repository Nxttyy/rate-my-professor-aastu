'use client'
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './page.module.css';
import Script from 'next/script';
import "bootstrap/dist/css/bootstrap.min.css";
import './10015.css'

import Nav from './_components/Nav.tsx'


import { UserProvider } from "./context/userContext";

const inter = Inter({ subsets: ['latin'] });
//
//export const metadata: Metadata = {
//  title: 'rate-my-professor AASTU',
//  description: 'Grate your AASTU profs.',
//};
//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} container `}>

        <Nav />
        <UserProvider>{children}</UserProvider>

      </body>
    </html>
  );
}
