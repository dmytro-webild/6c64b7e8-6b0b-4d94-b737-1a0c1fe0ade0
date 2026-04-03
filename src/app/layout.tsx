import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'DS Flooring & Granite | Home Remodeling & Cabinetry',
  description: 'DS Flooring & Granite provides expert kitchen, bathroom remodeling, custom cabinetry, and flooring services. Get a free estimate today.',
  openGraph: {
    "title": "DS Flooring & Granite | Remodeling Experts",
    "description": "Transform your home with professional remodeling and flooring by DS Flooring & Granite.",
    "siteName": "DS Flooring & Granite",
    "type": "website"
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
