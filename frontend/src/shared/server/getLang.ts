import { cookies, headers } from "next/headers";
import { Language } from "@/shared/lib";

export async function getLang(): Promise<Language> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value as Language | undefined;

  if (cookieLang === "en" || cookieLang === "ru") {
    return cookieLang;
  }

  const accept = (await headers()).get("accept-language");
  return accept?.startsWith("ru") ? "ru" : "en";
}
