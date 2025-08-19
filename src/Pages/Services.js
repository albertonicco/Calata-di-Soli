import React from 'react';
import './Services.css';
import { Link } from "react-router-dom";
import HomeFooter2 from "../Component/Footer2";
import { useLanguage } from '../Component/LanguageContext';
import {
    FaCoffee,
    FaWineGlassAlt,
    FaTshirt,
    FaSuitcase,
    FaCar,
    FaChair,
    FaUmbrellaBeach,
    FaBreadSlice,
} from 'react-icons/fa';

import { GiFruitBowl } from 'react-icons/gi';
import { MdLandscape } from 'react-icons/md';
import { WiDaySunny } from 'react-icons/wi'; // ☀️





const ServicesPage = () => {
    const { language } = useLanguage();
    const iconList = [
        <FaCoffee />,           // Colazione inclusa
        <GiFruitBowl />,        // Frutta fresca
        <FaWineGlassAlt />,     // Vino/champagne
        <WiDaySunny />,         // Solarium (ex cene evento)
        <FaBreadSlice />,       // Menù speciali
        <FaTshirt />,           // Lavanderia
        <FaSuitcase />,         // Deposito bagagli
        <FaCar />,              // Parcheggio
        <FaChair />,            // Spazi arredati
        <FaUmbrellaBeach />,    // Lettini prendisole
        <MdLandscape />,        // Vista
        <FaUmbrellaBeach />     // Fronte spiaggia
    ];

    const t = {
        it: {
            hero: 'Servizi',
            title: 'I servizi della struttura',
            subtitle: 'Un’esperienza autentica, tra comfort, natura e accoglienza',
            button: 'RICHIEDI INFORMAZIONI',
            services: [
                'Colazione inclusa',
                'Frutta fresca (a pagamento)',
                'Vino o champagne (su richiesta)',
                'Solarium',
                'Menù per diete particolari (su richiesta)',
                'Lavanderia e stireria (a pagamento)',
                'Deposito bagagli',
                'Parcheggio privato gratuito',
                'Spazi esterni arredati',
                'Lettini prendisole',
                'Vista mare / montagna / giardino',
                'Fronte spiaggia / accesso comodo'
            ]

        },
        en: {
            hero: 'Services',
            title: 'Our Facility Services',
            subtitle: 'An authentic experience of comfort, nature and hospitality',
            button: 'REQUEST INFORMATION',
            services: [
                'Breakfast included',
                'Fresh fruit (extra charge)',
                'Wine or champagne (on request)',
                'Solarium',
                'Special diet menus (on request)',
                'Laundry and ironing (extra charge)',
                'Luggage storage',
                'Free private parking',
                'Furnished outdoor areas',
                'Sun loungers',
                'Sea / mountain / garden view',
                'Beachfront / easy access'
            ]

        }
    };

    const text = t[language];


    return (
        <div className="services-page">
            <section className="hero-section">
                <div className="overlay">
                    <h1>{text.hero}</h1>
                </div>
            </section>

            <section className="services-header">
                <div className="header-inner">
                    <h2>{text.title}</h2>
                    <p className="subtitle">{text.subtitle}</p>
                </div>
                <div className="blue-divider" />
            </section>

            <section className="services-grid">
                {text.services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{iconList[index]}</div>
                        <h4>{service}</h4>
                    </div>
                ))}
            </section>

            <Link to="/#form" className="service-button">
                <button>{text.button}</button>
            </Link>

            <HomeFooter2 />
        </div>
    );
};

export default ServicesPage;
