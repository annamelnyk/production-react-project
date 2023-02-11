import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Loader } from 'shared/ui/Loader'
import { classNames } from 'shared/lib/classNames'
import css from './LoaderPage.module.scss'

export const LoaderPage: FC = () => {
  const { t } = useTranslation()

  return (
  <div className={classNames(css.LoaderPage, [])}>
    <Loader />
  </div>
  )
}
