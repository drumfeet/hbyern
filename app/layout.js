import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "HB Yern?",
  description: "Annoying each other and Funny Videos, LGBTQ lovers.",
  icons: {
    icon: "/globe.svg",
  },
  openGraph: {
    title: "HB Yern?",
    description: "Annoying each other and Funny Videos, LGBTQ lovers.",
    images: [
      {
        url: "/hbyern_meta.jpg",
        width: 1200,
        height: 630,
        alt: "hbyern",
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
        <Analytics />
      </body>
    </html>
  )
}
