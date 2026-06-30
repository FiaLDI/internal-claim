import { useNotificationStore } from "@/entities/notification";

export const useNotify = () => {
  const { isEnable, notify, content } = useNotificationStore();
  
    const notifyUi = (message: string) => {
        notify(message);
    }

    return {
        isEnable,
        notify: notifyUi,
        content,
    }
}
