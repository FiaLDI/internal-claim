import { Roboto } from "next/font/google";
import "./globals.css";

import { LanguageInit } from "@/features/language-switcher/ui/LanguageInit";
import { getLang } from "@/shared/server/getLang";
import { ClientOverlays } from "./ClientOverlays";
import { ThemeInit } from "@/features/theme-switcher";
import { getTheme } from "@/shared/server/getTheme";
import { UserInit } from "@/entities/user";
import { AuthApi } from "@/entities/user/model/api";
import { User } from "@/entities/user/model/types";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-sans",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLang();
  const theme = await getTheme();
  let users: User = [];
  
    try {
      users = await AuthApi.me();
    } catch (e) {
      console.error(e);
    }

  return (
    <html lang={lang} data-theme={theme}>
      <body className={`${roboto.variable} antialiased bg-background`}>
        <LanguageInit lang={lang} />
        <ThemeInit theme={theme} />
        <UserInit user={users}/>

        {children}

        <ClientOverlays />
      </body>
    </html>
  );
}
