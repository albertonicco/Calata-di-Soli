import { createContext, useContext, useState } from 'react';

export const LanguageContext= createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('it'); // 'it' o 'en'

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'it' ? 'en' : 'it'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
