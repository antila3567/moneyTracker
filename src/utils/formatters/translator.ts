import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTranslation } from 'react-i18next';

const translator = () => {
  const lang = useTypedSelector((state) => state.settings.language);

  const { i18n } = useTranslation();
  useEffect(() => {
    if (lang === '') {
      i18n.changeLanguage(lang);
    }
  }, [lang]);
};

export default translator;
