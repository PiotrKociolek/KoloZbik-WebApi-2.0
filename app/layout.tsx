import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ZbikNavbar from "@/components/zbikNavbar";
import {Providers} from "@/app/(root)/providers";

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Koło Łowieckie Żbik',
  description: 'Koło łowieckie żbik w nowym sączu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={inter.className}>  <Providers>{children} </Providers></body>

    </html>
  )
}
