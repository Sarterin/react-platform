import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink.types'
import cls from './Navbar.module.scss'
import type { NavbarProps } from './Navbar.types'

export const Navbar = ({ className }: NavbarProps) => {
  return (
      <div className={classNames(cls.navbar, {}, [className])}>
          <div className={cls.links}>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main</AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
          </div>
      </div>
  )
}
