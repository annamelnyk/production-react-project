import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { TranslateSwitcher } from 'features/TranslateSwitcher'
import { classNames } from 'shared/lib/classNames'
import css from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true)

  const handleCollapse = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(css.Sidebar, [className], {
        [css.collapsed]: collapsed
      })}
    >
      <button onClick={handleCollapse}>Toggle</button>
      <div className="switchers">
        <ThemeSwitcher />
        <TranslateSwitcher />
      </div>
    </div>
  )
}
