import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Affiliate Store",
  description: "An amazing affiliate marketing website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={metadata.description} />
          <title>{metadata.title}</title>
        </Head>
      </head>
      <body className="bg-gray-100 font-sans text-gray-900">
        <Header />
        <main className="p-6">{children}</main> {/* Padding around content */}
        <Footer />
      </body>
    </html>
  );
}
