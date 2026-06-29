"use client";
import { useLanguageStore } from "@/features/language-switcher/model/useLanguageStore";
import { allLanguage } from "@/shared/lib";
import { SquareArrowDown, SquareArrowUp } from "lucide-react";
import { useState } from "react";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguageStore();
  const [ open, setOpen ] = useState<boolean>(false);

  return (
    <div 
      data-isopen={open} 
      className="flex gap-2 fixed z-30 right-0 top-0 bg-background p-1 text-white text-sm [&>button]:p-2 [&>button]:cursor-pointer [&>button]:data-[current=true]:bg-blue-600 pointer-events-auto data-[isopen=false]:bg-transparent">
      
      <button onClick={()=> setOpen(prev => !prev)}>{!open ? <SquareArrowDown /> : <SquareArrowUp />}</button>
      {open && allLanguage.map((val, idx) => (
        <button
          key={`lang-btn-${val}-${idx}`}
            data-current={lang === val}
            onClick={() => setLang(val)}
            >
            {val.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

