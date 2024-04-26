import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import type { FC } from 'react'
import type { ButtonProps } from './Button.types'

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props

  return (
      <button
          type="button"
          className={classNames(cls.button, {}, [className, cls[theme]])}
          {...otherProps}
        >
          {children}
      </button>
  )
}
