import { useContext } from "react";
import { LS_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import { ThemeResult } from "./Theme.types";

export function useTheme(): ThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LS_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}