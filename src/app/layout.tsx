import type { Metadata } from "next";
import "./globals.css";
import ErrorContext from "@/app/Errors/ErrorContext";
import {Toaster} from "@/components/ui/toaster";

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
            <ErrorContext>
              {children}
              <Toaster />
            </ErrorContext>
          </div>
        </body>
    </html>
  );
}
