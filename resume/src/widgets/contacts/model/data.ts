
import { Language } from "@/shared/lib";
import { ContactDict } from "../types/contacts.types";

export const CONTACT_STATIC = {
  email: "leonid.stepanoff2015@gmail.com",
  github: "https://github.com/FiaLDI",
  telegram: "https://t.me/Leoniditlo",
};

export const ContactData: Record<Language, ContactDict> = {
  en: {
    title: "Contacts",
    subtitle:
      "Open for collaboration, freelance projects, and interesting ideas.",
    messageTitle: "Send me a message",
    messagePlaceholder: "Your message...",
    cta: "Send",
  },
  ru: {
    title: "Контакты",
    subtitle:
      "Открыт к сотрудничеству, фриланс-проектам и интересным идеям.",
    messageTitle: "Написать сообщение",
    messagePlaceholder: "Ваше сообщение...",
    cta: "Отправить",
  },
};
