import React from "react";
import "./Footer2.css";
import logo from "../Assets/Logo.png";
import { useLanguage } from "../Component/LanguageContext"; // ← Assicurati che il path sia corretto

const HomeFooter2 = () => {
    const handleCookieSettings = () => {
        if (window.Cookiebot) {
            window.Cookiebot.show();
        }
    };

    const { language } = useLanguage();

    const t = {
        it: {
            address: "Via Monteponi 13, 70040 Località Argentiera ",
            tel: "Tel: +39 3358184083",
            email: "Email: info@calatadisoli.net",

            copyright: "© Calata di Soli - Tutti i diritti riservati",
            privacy: "Privacy Policy",
            cookie: "Cookie Policy",
        },
        en: {
            address: "Via Monteponi 1370040 Argentiera locality,",
            tel: "Phone: +39 3358184083",
            email: "Email: info@calatadisoli.net",

            copyright: "© Calata di Soli - All rights reserved",
            privacy: "Privacy Policy",
            cookie: "Cookie Policy",
        },
    };

    const text = t[language];

    return (
        <footer className="footer2">
            {/* Prima sezione */}
            <div className="footer-top2">
                <img src={logo} alt="Calata di Soli Logo" className="footer-logo2" />
                <div className="footer-divider2"></div>
                <p className="footer-line2">{text.address}</p>
                <p className="footer-line2">{text.tel} <strong></strong></p>
                <p className="footer-line2">{text.email} <strong></strong></p>

            </div>

            {/* Seconda sezione */}
            <div className="footer-bottom2">
                {text.copyright} • <span className="policy">{text.privacy}</span> • <span className="policy" onClick={handleCookieSettings} style={{ cursor: 'pointer' }}>Cookie Policy</span>
            </div>
        </footer>
    );
};

export default HomeFooter2;
