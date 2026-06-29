"use client";

import { allTheme } from "@/shared/lib/theme";
import { useThemeStore } from "../model/useThemeStore";
import { useState } from "react";
import { SquareArrowDown, SquareArrowUp } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();
  const [ open, setOpen ] = useState<boolean>(false);

  return (
    <div 
      data-isopen={open} 
      className="flex flex-col lg:flex-row gap-2 fixed z-30 left-0 top-0 bg-background p-1 text-white text-sm [&>button]:p-2 [&>button]:cursor-pointer [&>button]:data-[current=true]:bg-blue-600 pointer-events-auto data-[isopen=false]:bg-transparent">
      {open && allTheme.map((val, idx) => (
        <button
            key={`theme-btn-${val}-${idx}`}
            data-current={theme === val}
            onClick={() => setTheme(val)}
            >
            {val}
        </button>
      ))}
      <button onClick={()=> setOpen(prev => !prev)}>{!open ? <SquareArrowDown /> : <SquareArrowUp />}</button>
    </div>
  );
}

