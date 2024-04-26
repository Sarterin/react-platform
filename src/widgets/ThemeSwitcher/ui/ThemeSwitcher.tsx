import { Theme, useTheme } from 'shared/contexts'
import { Button } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { ThemeButton } from 'shared/ui/Button/Button.types'
import type { ThemeSwitcherProps } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher.types'

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
      <Button
          theme={ThemeButton.CLEAR}
          className={classNames(cls.themeSwitcher, {}, [className])}
          onClick={toggleTheme}>
          {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
  )
}
