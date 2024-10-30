import localFont from "next/font/local";
import "./globals.css";
import { ToastProvider } from "@/components/primitive/toast";
import { Toaster } from "@/components/primitive/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bookself App",
  description: "Simple CRUD bookself app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
