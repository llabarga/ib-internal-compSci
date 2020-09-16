/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */

/* istanbul ignore next */
if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  //require('@formatjs/intl-pluralrules/dist/locale-data/es');
}

/* istanbul ignore next */
if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  // require('@formatjs/intl-relativetimeformat/dist/locale-data/es');
}


const DEFAULT_LOCALE = 'en';
const enTranslationMessages = require('./translations/en.json');
//const esTranslationMessages = require('./translations/es.json');

// prettier-ignore
const appLocales = ['en'];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

//  es: formatTranslationMessages('es', esTranslationMessages),
const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
