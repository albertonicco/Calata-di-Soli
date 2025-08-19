import React from 'react';
import './HomeContactSection.css';
import { useLanguage } from '../Component/LanguageContext'; // Assicurati che il path sia corretto

const HomeContactSection = () => {
    const { language } = useLanguage();

    const t = {
        it: {
            mainTitle: 'Richiedi informazioni',
            section1: 'Dati personali',
            name: 'Nome e Cognome',
            email: 'Email',
            phone: 'Telefono',
            country: 'Nazione',
            section2: 'Richiesta di prenotazione',
            select: 'Scegli tipo di alloggio',
            ginestra: 'Camera Ginestra',
            mirto: 'Camera Mirto',
            date: 'Data',
            adults: 'Numero di adulti',
            children: 'Numero di bambini (fino a 3 anni)',
            message: 'Il tuo messaggio',
            privacy: 'Accetto le ',
            privacyLink: 'Norme sulla privacy',
            button: 'INVIA LA RICHIESTA'
        },
        en: {
            mainTitle: 'Request information',
            section1: 'Personal Data',
            name: 'Full Name',
            email: 'Email',
            phone: 'Phone',
            country: 'Country',
            section2: 'Booking Request',
            select: 'Choose accommodation type',
            ginestra: 'Ginestra Room',
            mirto: 'Mirto Room',
            date: 'Date',
            adults: 'Number of adults',
            children: 'Number of children (up to 3 years)',
            message: 'Your message',
            privacy: 'I accept the ',
            privacyLink: 'Privacy Policy',
            button: 'SEND REQUEST'
        }
    };

    const text = t[language];

    return (
        <div className="HomeContactSection" id="form">
            <div className="contacts-wrapper">
                <div className="contacts-left">
                    <div className="card2 form-card">
                        <h2 className="main-form-title">{text.mainTitle}</h2>

                        <div className="form-section">
                            <h3>{text.section1}</h3>
                            <div className="row">
                                <input type="text" placeholder={text.name} />
                                <input type="email" placeholder={text.email} />
                            </div>
                            <div className="row">
                                <input type="tel" placeholder={text.phone} />
                                <input type="text" placeholder={text.country} />
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>{text.section2}</h3>
                            <select name="tipo-alloggio" id="tipo-alloggio">
                                <option value="">{text.select}</option>
                                <option value="ginestra">{text.ginestra}</option>
                                <option value="mirto">{text.mirto}</option>
                            </select>

                            <div className="row">
                                <input type="date" />
                                <input type="date" />
                            </div>
                            <div className="row">
                                <input type="number" placeholder={text.adults} />
                                <input type="number" placeholder={text.children} />
                            </div>
                            <textarea placeholder={text.message} rows="4" />

                            <div className="privacy-row">
                                <input type="checkbox" id="privacy" />
                                <label htmlFor="privacy">
                                    {text.privacy}
                                    <a href="#">{text.privacyLink}</a>
                                </label>
                            </div>

                            <button className="submit-button">{text.button}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContactSection;
