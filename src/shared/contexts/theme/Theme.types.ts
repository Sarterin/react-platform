import type { Theme } from './ThemeContext'

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export interface ThemeResult {
  theme: Theme
  toggleTheme: () => void
}
