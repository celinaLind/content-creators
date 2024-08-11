import { Inter } from "next/font/google";
import "./globals.css";
import "@picocss/pico/css/pico.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Content Creators",
  description: "See everyones favorite content creators!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
