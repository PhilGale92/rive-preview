import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rive Preview",
  description: "Little preview sandbox for rive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          <div className="bg-zinc-950 dark:bg-white">
              {children}
          </div>
        </body>
    </html>
  );
}
