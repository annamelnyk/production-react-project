import React from 'react'
import { useTranslation } from "react-i18next";

type Props = {}

const MainPage = (props: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <div>{t('Main page')}</div>
  )
}

export default MainPage