import { type FC } from 'react'

import css from './Loader.module.scss'

export const Loader: FC = () => {
  return (
    <div className={css['lds-spinner']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
