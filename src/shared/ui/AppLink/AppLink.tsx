import { Link } from "react-router-dom"
import { AppLinkProps, AppLinkTheme } from "./AppLink.types"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./AppLink.module.scss"
import type { FC } from "react"

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}