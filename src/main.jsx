import React from 'react'
import ReactDOM from 'react-dom/client'
import i18n from 'i18next';
import { initReactI18next, I18nextProvider  } from 'react-i18next';

import enTranslations from '../translateFile/en/translate.json';
import ptTranslations from '../translateFile/pt/translate.json';
import { MainContainer } from './styled';
import  Windows  from '../src/components/Windows/index.jsx'

function Main() {

  i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    initImmediate: false,
    debug: false,
    resources: {
      en: {
        translation: enTranslations
      },
      pt: {
        translation: ptTranslations
      }
    }
  });

  return (
    <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <MainContainer>
        <Windows />
      </MainContainer>
    </React.StrictMode>
    </I18nextProvider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
export default Main;