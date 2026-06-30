import { useEffect, useState } from "react";

export function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 25);

    return () => clearInterval(id);
  }, [text]);

  return <span>{displayed}</span>;
}
