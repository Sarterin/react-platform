import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import type { NotFoundPageProps } from './NotFoundPage.types'

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()

  return (
      <div className={classNames(cls.notFoundPage, {}, [className])}>
          {t('NotFoundPage')}
      </div>
  )
}
