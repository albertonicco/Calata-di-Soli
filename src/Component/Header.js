import { NavLink } from 'react-router-dom';
import './Header.css';
import logo2 from '../Assets/Logo.png';
import itFlag from '../Assets/Flag2.png';
import enFlag from '../Assets/Flageng.png';
import { useState } from 'react';
import { useLanguage} from '../Component/LanguageContext'; // ✅ IMPORTA

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { language, toggleLanguage } = useLanguage(); // ✅ USA CONTEXT

    // ✅ Traduzioni base
    const t = {
        it: {
            home: 'Home',
            rooms: 'Camere',
            room1: 'Camera Simone',
            room2: 'Camera Carlotta',
            services: 'Servizi',
            gallery: 'Gallery',
            contacts: 'Contatti',
            writeUs: 'Scrivici',
            writeNow: 'Scrivici ora',
        },
        en: {
            home: 'Home',
            rooms: 'Rooms',
            room1: 'Simon Room',
            room2: 'Carlotta Room',
            services: 'Services',
            gallery: 'Gallery',
            contacts: 'Contacts',
            writeUs: 'Write us',
            writeNow: 'Contact now',
        },
    };

    const text = t[language];

    return (
        <header className="header">
            <div className="header-container">
                {/* Sinistra: logo + titolo */}
                <div className="header-left">
                    <img src={logo2} alt="Logo Calata di Soli" className="logo2" />
                    <span className="site-name">La Calata di Soli</span>
                </div>

                {/* Centro: menu desktop */}
                <nav className="nav-center">
                    <NavLink to="/" className="nav-link">{text.home}</NavLink>
                    <span className="separator">|</span>
                    <div className="nav-item dropdown">
                        <NavLink to="/camere" className="nav-link">{text.rooms}</NavLink>
                        <div className="dropdown-menu">
                            <NavLink to="/camere/cameraarancione" className="dropdown-link">{text.room1}</NavLink>
                            <NavLink to="/camere/camerablu" className="dropdown-link">{text.room2}</NavLink>
                        </div>
                    </div>
                    <span className="separator">|</span>
                    <NavLink to="/servizi" className="nav-link">{text.services}</NavLink>
                    <span className="separator">|</span>
                    <NavLink to="/gallery" className="nav-link">{text.gallery}</NavLink>
                    <span className="separator">|</span>
                    <NavLink to="/contatti" className="nav-link">{text.contacts}</NavLink>
                </nav>

                {/* Destra: lingue + bottone + toggle */}
                <div className="header-right">
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        ☰
                    </button>
                    <div className="lang-switcher">
                        <img src={itFlag} alt="Italiano" className="flag" onClick={() => language !== 'it' && toggleLanguage()} />
                        <img src={enFlag} alt="English" className="flag" onClick={() => language !== 'en' && toggleLanguage()} />
                    </div>
                    <NavLink to="/#form" className="nav-button">{text.writeUs}</NavLink>
                </div>
            </div>

            {/* Menu mobile a tendina */}
            {isMenuOpen && (
                <nav className="mobile-menu">
                    <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>{text.home}</NavLink>
                    <NavLink to="/camere" className="nav-link" onClick={() => setIsMenuOpen(false)}>{text.rooms}</NavLink>
                    <NavLink to="/servizi" className="nav-link" onClick={() => setIsMenuOpen(false)}>{text.services}</NavLink>
                    <NavLink to="/gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>{text.gallery}</NavLink>
                    <NavLink to="/contatti" className="nav-link" onClick={() => setIsMenuOpen(false)}>{text.contacts}</NavLink>
                    <NavLink to="/#form" className="nav-link" onClick={() => setIsMenuOpen(false)}>{text.writeNow}</NavLink>
                </nav>
            )}
        </header>
    );
}

export default Header;
