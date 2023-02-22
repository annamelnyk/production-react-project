import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames';
import css from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

export interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    to,
    children,
    ...otherProps
  } = props;
  return (
    <Link
      className={classNames(css.AppLink, [className, css[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
