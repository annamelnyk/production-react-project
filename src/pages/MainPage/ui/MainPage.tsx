import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('Main page')}</h1>
    </div>
  )
}

export default MainPage
