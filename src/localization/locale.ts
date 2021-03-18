import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from './en/index';
import ru from './ru/index';
import ua from './ua/index';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  ru,
  ua,
};

export default I18n;
