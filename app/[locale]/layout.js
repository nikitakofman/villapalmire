import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Villa Palmire - guest house in La Turbie",
  description: "Villa Palmire is a guest house in La Turbie, France.",
  openGraph: {
    title: "Villa Palmire",
    description: "Villa Palmire is a guest house in La Turbie, France.",
    url: "https://www.villadepalmire.com",
    images: [
      {
        url: "https://www.villadepalmire.com/vpweb.png",
        width: 800,
        height: 600,
        alt: "Home page",
      },
    ],
    siteName: "Nikita Kofman's Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
