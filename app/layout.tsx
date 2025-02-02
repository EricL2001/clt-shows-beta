import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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


export const metadata: Metadata = {
  title: "CLT Show App - Beta",
  description: "Find upcoming shows at Charlotte's top independent music venues",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#111827", // matches your bg-gray-900
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CLT Shows",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-and-192.jpg', sizes: '192x192', type: 'image/jpg' },
      { url: '/icon-512.jpg', sizes: '512x512', type: 'image/jpg' },
    ],
    apple: [
      { url: '/icon-ios-180.jpg', sizes: '180x180', type: 'image/jpg' },
    ],
  },
  manifest: '/manifest.json',
  applicationName: "CLT Shows",
  openGraph: {
    type: 'website',
    siteName: 'CLT Shows',
    title: 'CLT Show App - Beta',
    description: 'Find upcoming shows at Charlotte\'s top independent music venues',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
