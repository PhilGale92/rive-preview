import type { Metadata } from "next";
import "./globals.css";
import ErrorContext from "@/app/Errors/ErrorContext";
import {Toaster} from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Rive Browser Previewer",
  description: "Browser based rive file preview (based on Rive runtime). No files are uploaded (check your network tab!)",
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
              <main className="w-100% h-100% p-10">
                {children}
              </main>
              <Toaster />
            </ErrorContext>
          </div>
        </body>
    </html>
  );
}
