import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/classNames";

import css from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = 'clear',
 }

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    onClick,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(css.Button, [className, css[theme]])}
      onClick={onClick}
      {...otherProps}
    >    
      {children}
    </button>
  );
};
