import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './page.module.css';
import Script from 'next/script';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import './10015.css'

import { UserProvider } from "./context/userContext";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'rate-my-professor AASTU',
  description: 'Grate your AASTU profs.',
};

function Nav() {
  return (
    <div className="d-flex justify-content-evenly ">
      <Link href="/">home</Link>
      <Link href="/browse">Browse</Link>
      <Link href="/addEditProf/new">Add</Link>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} container `}><Nav />
        <UserProvider>{children}</UserProvider>

      </body>
    </html>
  );
}
