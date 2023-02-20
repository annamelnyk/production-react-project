import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { TranslateSwitcher } from 'features/TranslateSwitcher';
import { classNames } from 'shared/lib/classNames';
import css from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(css.Sidebar, [className], {
        [css.collapsed]: collapsed,
      })}
    >
      <button
        data-testid="sidebar-toggle"
        onClick={handleCollapse}
      >
        {t('Toggle')}
      </button>
      <div className="switchers">
        <ThemeSwitcher />
        <TranslateSwitcher />
      </div>
    </div>
  );
};
