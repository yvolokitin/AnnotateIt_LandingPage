import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: t('languageSelector.languages.en'), flag: '🇺🇸' },
    { code: 'es', name: t('languageSelector.languages.es'), flag: '🇪🇸' },
    { code: 'fr', name: t('languageSelector.languages.fr'), flag: '🇫🇷' },
    { code: 'de', name: t('languageSelector.languages.de'), flag: '🇩🇪' },
    { code: 'it', name: t('languageSelector.languages.it'), flag: '🇮🇹' },
    { code: 'pt', name: t('languageSelector.languages.pt'), flag: '🇵🇹' },
    { code: 'nl', name: t('languageSelector.languages.nl'), flag: '🇳🇱' },
    { code: 'ru', name: t('languageSelector.languages.ru'), flag: '🇷🇺' },
    { code: 'pl', name: t('languageSelector.languages.pl'), flag: '🇵🇱' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-selector">
      <button
        className="language-selector-button"
        onClick={toggleDropdown}
        aria-label={t('languageSelector.label')}
      >
        <span className="language-name">{currentLanguage.code.toUpperCase()}</span>
        <span className={`language-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${i18n.language === language.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="language-name">{language.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;