import { type ButtonHTMLAttributes, type FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import css from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, onClick, theme, ...otherProps } = props;

  return (
    <button
      data-testid="button"
      className={classNames(css.Button, [className, css[theme]])}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
