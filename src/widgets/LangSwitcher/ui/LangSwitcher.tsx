import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { ThemeButton } from "shared/ui/Button/Button.types"
import {Button} from "shared/ui/Button/Button"
import cls from "./LangSwitcher.module.scss"
import type {LangSwitcherProps} from "./LangSwitcher.types"

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggleTranslation = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTranslation}
        >
            {t('Language')}
        </Button>
    )
}