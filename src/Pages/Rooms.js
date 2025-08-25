import React from 'react';
import './Rooms.css';
import imgGinestra from '../Assets/Camera blu1.jpg';
import imgMirto from '../Assets/Cameraarancione2.jpg';
import heroImg from '../Assets/duecamere.jpg';
import HomeFooter2 from "../Component/Footer2";
import { Link } from "react-router-dom";
import PersonIcon from '../Assets/Icon People.png';
import BathIcon from '../Assets/BathIcon.png';
import GardenIcon from '../Assets/Garden.png';
import { useLanguage } from '../Component/LanguageContext'; // ← Assicurati che il path sia corretto

const Rooms = () => {
    const { language } = useLanguage();

    const t = {
        it: {
            title: "Le nostre camere",
            description: `Le camere della Calata di Soli raccontano un modo di ospitare autentico e intimo.
Ogni spazio è stato pensato per trasmettere la tranquillità e la bellezza del luogo,
fondendo comfort moderno e atmosfera mediterranea. Un invito al riposo, alla semplicità
e alla connessione con la natura.`,

            ginestra: {
                title: "Camera Simone",
                description: "Luminosa e accogliente, con vista sul mare e profumi di macchia mediterranea.",
                button: "Scopri di più"
            },
            mirto: {
                title: "Camera Carlotta",
                description: "Atmosfera intima e rilassante, ideale per un soggiorno di puro benessere.",
                button: "Scopri di più"
            },
            badges: {
                people: "2 Persone",
                bath: "1 Bagno",
                garden: "Vista Giardino"
            }
        },

        en: {
            title: "Our Rooms",
            description: `The rooms at Calata di Soli reflect an authentic and intimate way of hospitality.
Each space was designed to convey the calm and beauty of the surroundings,
combining modern comfort with a Mediterranean atmosphere. An invitation to rest,
simplicity, and connection with nature.`,

            ginestra: {
                title: "Ginestra Room",
                description: "Bright and welcoming, with sea view and scents of Mediterranean scrub.",
                button: "Learn more"
            },
            mirto: {
                title: "Mirto Room",
                description: "Intimate and relaxing atmosphere, perfect for a truly restorative stay.",
                button: "Learn more"
            },
            badges: {
                people: "2 People",
                bath: "1 Bathroom",
                garden: "Garden View"
            }
        }
    };

    const text = t[language];

    return (
        <div className="rooms-page">
            <div
                className="rooms-hero"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="rooms-hero-overlay">
                    <h1>{text.title}</h1>
                </div>
            </div>

            <div className="rooms-description">
                <p>{text.description}</p>
            </div>

            <div className="card-wrapper">
                {/* Camera Ginestra */}
                <div className="room-card">
                    <img src={imgGinestra} alt="Camera Ginestra" className="room-image" />
                    <div className="room-content">
                        <h2>{text.ginestra.title}</h2>
                        <div className="room-badges">
                            <div className="badge">
                                <img src={PersonIcon} alt="people" />
                                <span>{text.badges.people}</span>
                            </div>

                            <span className="badge-separator">|</span>
                            <div className="badge">
                                <img src={BathIcon} alt="bath" />
                                <span>{text.badges.bath}</span>
                            </div>

                            <span className="badge-separator">|</span>
                            <div className="badge">
                                <img src={GardenIcon} alt="garden" />
                                <span>{text.badges.garden}</span>
                            </div>
                        </div>

                        <p>{text.ginestra.description}</p>
                        <Link to="/camere/cameraarancione">
                            <button className="room-button">{text.ginestra.button}</button>
                        </Link>
                    </div>
                </div>

                {/* Camera Mirto */}
                <div className="room-card">
                    <img src={imgMirto} alt="Camera Mirto" className="room-image" />
                    <div className="room-content">
                        <h2>{text.mirto.title}</h2>
                        <div className="room-badges">
                            <div className="badge">
                                <img src={PersonIcon} alt="people" />
                                <span>{text.badges.people}</span>
                            </div>

                            <span className="badge-separator">|</span>
                            <div className="badge">
                                <img src={BathIcon} alt="bath" />
                                <span>{text.badges.bath}</span>
                            </div>

                            <span className="badge-separator">|</span>
                            <div className="badge">
                                <img src={GardenIcon} alt="garden" />
                                <span>{text.badges.garden}</span>
                            </div>
                        </div>

                        <p>{text.mirto.description}</p>
                        <Link to="/camere/camerablu">
                            <button className="room-button">{text.mirto.button}</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <HomeFooter2 />
            </div>
        </div>
    );
};

export default Rooms;
