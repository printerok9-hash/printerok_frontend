import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "PrinterOK | UK Printer Repairs & Support — Coming Soon",
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  description: "A fresh start for your printer. PrinterOK is preparing a new home for printer repairs and support in the United Kingdom. Coming soon.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-GB"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
