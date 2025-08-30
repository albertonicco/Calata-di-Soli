import React, { useState } from 'react';
import './HomeContactSection.css';
import { useLanguage } from '../Component/LanguageContext';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const HomeContactSection = () => {
    const { language } = useLanguage();
    const [captchaValue, setCaptchaValue] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        room: '',
        startDate: '',
        endDate: '',
        adults: '',
        children: '',
        message: '',
        privacyAccepted: false
    });

    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null);

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
            ginestra: 'Camera Simone',
            mirto: 'Camera Carlotta',
            date: 'Data',
            adults: 'Numero di adulti',
            children: 'Numero di bambini (fino a 3 anni)',
            message: 'Il tuo messaggio',
            privacy: 'Accetto le ',
            privacyLink: 'Norme sulla privacy',
            button: 'INVIA LA RICHIESTA',
            nameRequired: 'Il nome è obbligatorio.',
            emailInvalid: 'Inserisci un indirizzo email valido.',
            privacyRequired: 'Devi accettare le norme sulla privacy.',
            captchaRequired: 'Completa il CAPTCHA.',
            success: 'Messaggio inviato con successo!',
            error: 'Errore nell\'invio. Riprova.'
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
            ginestra: 'Simon Room',
            mirto: 'Carlotta Room',
            date: 'Date',
            adults: 'Number of adults',
            children: 'Number of children (up to 3 years)',
            message: 'Your message',
            privacy: 'I accept the ',
            privacyLink: 'Privacy Policy',
            button: 'SEND REQUEST',
            nameRequired: 'Name is required.',
            emailInvalid: 'Please enter a valid email address.',
            privacyRequired: 'You must accept the privacy policy.',
            captchaRequired: 'Please complete the CAPTCHA.',
            success: 'Message sent successfully!',
            error: 'Sending error. Please try again.'
        }
    };

    const text = t[language];

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = text.nameRequired;
        if (!formData.email || !formData.email.includes('@')) newErrors.email = text.emailInvalid;
        if (!formData.privacyAccepted) newErrors.privacy = text.privacyRequired;
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitStatus(null);
            return;
        }

        if (!captchaValue) {
            setErrors({ captcha: text.captchaRequired });
            return;
        }

        setErrors({});

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            room: formData.room,
            phone: formData.phone,
            country: formData.country,
            adults: formData.adults,
            children: formData.children,
            startDate: formData.startDate,
            endDate: formData.endDate,
        };

        emailjs.send(
            'service_j1ica2c',
            'template_r67rf2y',
            templateParams,
            'FEvUtYuzsXmAZUss_'
        )
            .then(() => {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    country: '',
                    room: '',
                    startDate: '',
                    endDate: '',
                    adults: '',
                    children: '',
                    message: '',
                    privacyAccepted: false
                });
                setCaptchaValue(null);
            })
            .catch(() => {
                setSubmitStatus('error');
            });
    };

    return (
        <div className="HomeContactSection" id="form">
            <div className="contacts-wrapper">
                <div className="contacts-left">
                    <div className="card2 form-card">
                        <h2 className="main-form-title">{text.mainTitle}</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-section">
                                <h3>{text.section1}</h3>
                                <div className="row">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder={text.name}
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'error' : ''}
                                    />
                                    {errors.name && <p className="error-text">{errors.name}</p>}

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={text.email}
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error' : ''}
                                    />
                                    {errors.email && <p className="error-text">{errors.email}</p>}
                                </div>

                                <div className="row">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder={text.phone}
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="country"
                                        placeholder={text.country}
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>{text.section2}</h3>
                                <select name="room" value={formData.room} onChange={handleChange}>
                                    <option value="">{text.select}</option>
                                    <option value="ginestra">{text.ginestra}</option>
                                    <option value="mirto">{text.mirto}</option>
                                </select>

                                <div className="row">
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="date"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="row">
                                    <input
                                        type="number"
                                        name="adults"
                                        placeholder={text.adults}
                                        value={formData.adults}
                                        onChange={handleChange}
                                        min="0"
                                    />
                                    <input
                                        type="number"
                                        name="children"
                                        placeholder={text.children}
                                        value={formData.children}
                                        onChange={handleChange}
                                        min="0"
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    placeholder={text.message}
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                />

                                <div className="privacy-row">
                                    <input
                                        type="checkbox"
                                        name="privacyAccepted"
                                        id="privacy"
                                        checked={formData.privacyAccepted}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="privacy">
                                        {text.privacy}
                                        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">{text.privacyLink}</a>
                                    </label>
                                </div>
                                {errors.privacy && <p className="error-text">{errors.privacy}</p>}
                                {errors.captcha && <p className="error-text">{errors.captcha}</p>}
                                {submitStatus === 'success' && <p className="success-text">{text.success}</p>}
                                {submitStatus === 'error' && <p className="error-text">{text.error}</p>}

                                <ReCAPTCHA
                                    sitekey="6LcyprQrAAAAAC56jbypJ5lER8dd0fjdmQatJyHN"
                                    onChange={(value) => setCaptchaValue(value)}
                                />

                                <button type="submit" className="submit-button">
                                    {text.button}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContactSection;
