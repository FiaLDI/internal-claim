import { Roboto } from "next/font/google";
import "./globals.css";

import { ClientOverlays } from "./ClientOverlays";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-sans",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html >
      <body className={`${roboto.variable} antialiased bg-background`}>
        {children}
        <ClientOverlays />
      </body>
    </html>
  );
}
