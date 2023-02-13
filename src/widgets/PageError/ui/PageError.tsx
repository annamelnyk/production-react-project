import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames'
import css from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(css.PageError, [className])}>
      <h1>{t('Something went wrong')}</h1>
      <div>
        <Button onClick={reloadPage}>{t('Reload page')}</Button>
      </div>
    </div>
  )
}
