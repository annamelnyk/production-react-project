import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/AppLink";

import css from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(css.Navbar, [])}>
      <div className={css.links}>
        <AppLink to="/" className={css.link}>
          {t('Main')}
        </AppLink>
        <AppLink to="/about" className={css.link}>
          {t('About us')}
        </AppLink>
      </div>
    </div>
  );
};
