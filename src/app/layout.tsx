import type { Metadata } from "next";
import { Dancing_Script, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script'
})
const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab'
})

export const metadata: Metadata = {
  title: "Wedding of Maribel & Fernando",
  description: "The wedding of Maribel & Fernando at January, 31 2026",
  icons: {
    icon: "/ring.svg"
  },
  openGraph: {
    images: "https://wedding-invitation-theta-five.vercel.app/_next/image?url=%2Fphotos%2Fgallery-2.jpg&w=640&q=75",
    type: "website",
    locale: "ID-id",
    siteName: "",
    title: "Boda: Maribel & Fernando",
    description: "La boda de Maribel & Fernando at January, 31 2026",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ring.svg" sizes="any" />
      </head>
      <body
        className={`${dancing_script.variable} ${roboto_slab.variable}`}>
        {children}
        <Toaster duration={2000}/>
      </body>
    </html>
  );
}
