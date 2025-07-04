import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Serena Blake | Clinical Psychologist",
  description: "Dr. Serena Blake is a licensed clinical psychologist based in Los Angeles, CA, specializing in anxiety, relationships, and trauma recovery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
