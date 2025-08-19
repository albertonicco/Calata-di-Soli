import React from 'react';
import './Contacts.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import HomeFooter2 from "../Component/Footer2";
import { useLanguage } from '../Component/LanguageContext';

const Contacts = () => {
    const { language } = useLanguage();

    const t = {
        it: {
            title: "Contatti",
            address: "Via Monteponi 13, 70040 Miniera dellʼArgentiera, Italia",
            email: "info@calatadisol.net",
            phone: "+39 3358184083",
            whatsapp: "WhatsApp: +39 3358184083",
        },
        en: {
            title: "Contacts",
            address: "Via Monteponi 13, 70040 Miniera dellʼArgentiera, Italy",
            email: "info@calatadisoli.net",
            phone: "+39 3358184083",
            whatsapp: "WhatsApp: +39 3358184083",
        }
    };

    const text = t[language];

    return (
        <div className="contacts-page">
            <div className="contacts-content">
                <div className="contacts-title">
                    <h2>{text.title}</h2>
                    <div className="separatorcontacts"></div>
                </div>

                <div className="map-wrapper">
                    <iframe
                        title="Mappa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.4262940089554!2d8.15034771536387!3d40.739459079327374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12dc95e8f7efca6d%3A0xc293e286cf81082a!2sVia%20Monteponi%2C%2013%2C%2007040%20Argentiera%20SS!5e0!3m2!1sit!2sit!4v1724089538532!5m2!1sit!2sit"
                        width="100%"
                        height="550"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                </div>

                <div className="contacts-cards">
                    <div className="contact-card">
                        <FaMapMarkerAlt className="contact-icon"/>
                        <p>{text.address}</p>
                    </div>
                    <div className="contact-card">
                        <FaEnvelope className="contact-icon"/>
                        <p><a href={`mailto:${text.email}`}>{text.email}</a></p>
                    </div>
                    <div className="contact-card">
                        <FaPhoneAlt className="contact-icon" />
                        <p><a href="tel:+393333580290">{text.phone}</a></p>
                        <FaWhatsapp className="contact-icon" />
                        <p><a href="https://wa.me/393333580290" target="_blank" rel="noreferrer">{text.whatsapp}</a></p>
                    </div>
                </div>
            </div>

            <HomeFooter2 />
        </div>
    );
};

export default Contacts;
