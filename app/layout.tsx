import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formacion Cakes and Pastries",
  description:
    "Beautiful handcrafted cakes made fresh for birthdays, weddings, celebrations and every sweet moment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}