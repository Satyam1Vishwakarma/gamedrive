// components/ThemeSwitcher.tsx
"use client"
import { useTheme } from "next-themes";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import { useEffect } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  function themeonoff() {
    theme == "light" ? setTheme("dark") : setTheme("light");
  }

  if (theme == "light") {
    return (
      <MoonFilledIcon height={80} width={80} onClick={themeonoff} size={22} />
    );
  } else {
    return (
      <SunFilledIcon height={80} width={80} onClick={themeonoff} size={22} />
    );
  }
};
