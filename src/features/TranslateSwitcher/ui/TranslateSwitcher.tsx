import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';

interface TranslateSwitcherProps {
  className?: string
}

interface Locale {
  locale: string
}

export const TranslateSwitcher = (props: TranslateSwitcherProps) => {
  const [locale, setLocale] = useState<string>('EN');
  const { t, i18n } = useTranslation();

  const changeLocaleHandler = () => {
    switch (locale) {
      case 'RU':
        setLocale('EN');
        i18n.changeLanguage('ru');
        return;
      case 'EN':
        setLocale('RU');
        i18n.changeLanguage('en');
        return;
      default:
        setLocale('RU');
        i18n.changeLanguage('en');
    }
  };

  return (
        <Button
            className={classNames('', ['clear'])}
            onClick={changeLocaleHandler}
        >
            {locale}
        </Button>
  );
};
