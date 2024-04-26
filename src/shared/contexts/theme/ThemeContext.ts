import { createContext } from 'react'
import type { ThemeContextProps } from './Theme.types'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LS_THEME_KEY = 'theme'
