import { type FC } from 'react';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon =
    theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />;

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {themeIcon}
    </Button>
  );
};
