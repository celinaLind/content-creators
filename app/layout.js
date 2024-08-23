import { Inter } from "next/font/google";
import "./globals.css";
import "@picocss/pico/css/pico.min.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Content Creators",
  description: "See everyones favorite content creators!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
