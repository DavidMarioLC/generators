import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generators Tools",
  description: "Generador de tamaños tipográficos, margins y paddings",
  openGraph: {
    title: "Generators Tools",
    description: "Generador de tamaños tipográficos, margins y paddings",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950`}>
        {children}

        <footer className="text-white text-center px-5 py-8 border-t border-slate-800  bg-slate-950 relative mt-16">
          <p>Made with ️💙 by David and Melina</p>
        </footer>
      </body>
    </html>
  );
}
