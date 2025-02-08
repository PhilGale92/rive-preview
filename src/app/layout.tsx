import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rive PreviewSystemLegacy",
  description: "Little PreviewSystemLegacy sandbox for rive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          <div>
              {children}
          </div>
        </body>
    </html>
  );
}
