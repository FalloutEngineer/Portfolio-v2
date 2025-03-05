import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Fallout Engineer's website",
  description: "My home on the vast Internet",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='85'>😈</text></svg>"
      />
      <body className={`${interSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
