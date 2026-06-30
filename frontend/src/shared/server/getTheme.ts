import { cookies, headers } from "next/headers";
import { Theme, validateTheme } from "@/shared/lib/theme";

export async function getTheme(): Promise<Theme> {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get("theme")?.value as Theme | undefined;

  if (cookieTheme && validateTheme(cookieTheme)) {
    return cookieTheme;
  }

  const accept = (await headers()).get("accept-theme");
  if (accept && validateTheme(accept)) {
    return accept as Theme;
  }

  return "dark";
}
