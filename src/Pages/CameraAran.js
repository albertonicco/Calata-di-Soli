import React, { useState } from 'react';
import './CameraAran.css';
import PersonIcon from '../Assets/Icon People.png';
import BathIcon from '../Assets/BathIcon.png';
import GardenIcon from '../Assets/Garden.png';
import RoomServices from "../Component/RoomServices";
import HomeFooter2 from "../Component/Footer2";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../Component/LanguageContext";

const CameraAran = () => {
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [fade, setFade] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);// ✅ aggiunto

    const { language } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick3 = () => {
        if (location.pathname === '/') {
            const el = document.getElementById('form');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { scrollTo: 'form' } });
        }
    };
    const openModal = (index) => {
        setSelectedImage(`/Images/CameraArancione/RoomA${index + 1}.jpg`);
        setSelectedIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedIndex(null);
    };

    const showPrevImage = (e) => {
        e.stopPropagation();
        const newIndex = (selectedIndex - 1 + 8) % 8;
        setSelectedImage(`/Images/CameraArancione/RoomA${newIndex + 1}.jpg`);
        setSelectedIndex(newIndex);
    };

    const showNextImage = (e) => {
        e.stopPropagation();
        const newIndex = (selectedIndex + 1) % 8;
        setSelectedImage(`/Images/CameraArancione/RoomA${newIndex + 1}.jpg`);
        setSelectedIndex(newIndex);
    };

    const t = {
        it: {
            title: "Camera Simone",
            people: "2 Persone",
            bath: "1 Bagno",
            view: "Vista Giardino",
            description: `La Camera Simone è un rifugio accogliente immerso nella natura, perfetto per chi desidera relax e tranquillità. Caratterizzata da tonalità azzurre sulle pareti, arredi in legno naturale e dettagli artigianali, la stanza trasmette una calda atmosfera mediterranea. L’ampia finestra regala una splendida vista sul giardino e sulla macchia mediterranea, illuminando gli spazi con luce naturale durante tutto il giorno. Dotata di letto matrimoniale, la camera dispone anche di bagno privato con doccia, set di cortesia e ceramiche artistiche. Ogni dettaglio è stato pensato per garantire un soggiorno rilassante e autentico, tra semplicità e comfort.`
        },
        en: {
            title: "Simon Room",
            people: "2 People",
            bath: "1 Bathroom",
            view: "Garden View",
            description: `The Simon Room is a cozy retreat surrounded by nature, perfect for those seeking relaxation and tranquility. Characterized by blue tones on the walls, natural wood furnishings, and artisanal details, the room conveys a warm Mediterranean atmosphere. The large window offers a splendid view of the garden and Mediterranean scrub, filling the room with natural light throughout the day. Equipped with a double bed, the room also features a private bathroom with shower, courtesy set, and artistic ceramics. Every detail has been carefully designed to ensure a relaxing and authentic stay, blending simplicity with comfort.`
        }
    };

    const text = t[language];

    return (
        <div className="camera-ginestra-page">
            {/* Hero con carosello */}
            <section className="camera-hero-carousel">
                <img
                    src={`/Images/CameraArancione/RoomA${currentIndex2 + 1}.jpg`}
                    alt={`camera ginestra ${currentIndex2 + 1}`}
                    className={`carousel-image ${fade ? 'fade' : ''}`}
                />
                <div className="camera-overlay">
                    <h1>{text.title}</h1>
                </div>
                <button className="carousel-btn left" onClick={() => {
                    setFade(true);
                    setTimeout(() => {
                        setCurrentIndex2((prev) => (prev === 0 ? 7 : prev - 1));
                        setFade(false);
                    }, 200);
                }}>
                    ‹
                </button>
                <button className="carousel-btn right" onClick={() => {
                    setFade(true);
                    setTimeout(() => {
                        setCurrentIndex2((prev) => (prev === 7 ? 0 : prev + 1));
                        setFade(false);
                    }, 200);
                }}>
                    ›
                </button>
            </section>

            {/* Badge dettagli */}
            <section className="camera-details">
                <div className="badge-item">
                    <img src={PersonIcon} alt="persone" />
                    <span>{text.people}</span>
                </div>
                <div className="badge-item">
                    <img src={BathIcon} alt="bagno" />
                    <span>{text.bath}</span>
                </div>
                <div className="badge-item">
                    <img src={GardenIcon} alt="vista giardino" />
                    <span>{text.view}</span>
                </div>
            </section>

            {/* Descrizione e galleria */}
            <section className="camera-description">
                <p className="camera-text">
                    {text.description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br /><br />
                        </React.Fragment>
                    ))}
                </p>

                <div className="camera-gallery">
                    {[
                        'RoomA1.jpg', 'RoomA2.jpg', 'RoomA3.jpg', 'RoomA4.jpg',
                        'RoomA5.jpg', 'RoomA6.jpg', 'RoomA7.jpg', 'RoomA8.jpg'
                    ].map((src, index) => (
                        <img
                            key={index}
                            src={`/Images/CameraArancione/${src}`}
                            alt={`camera ginestra ${index + 1}`}
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>

                {selectedImage && (
                    <div className="camera-modal" onClick={closeModal}>
                        <span className="modal-close" onClick={closeModal}>✕</span>
                        <button className="modal-arrow left" onClick={showPrevImage}>‹</button>
                        <img src={selectedImage} alt="fullscreen" className="modal-image" />
                        <button className="modal-arrow right" onClick={showNextImage}>›</button>
                    </div>
                )}

            </section>

            {/* ✅ MODAL PER L'IMMAGINE INGRANDITA */}
            {selectedImage && (
                <div className="camera-modal" onClick={() => setSelectedImage(null)}>
                    <span className="modal-close" onClick={() => setSelectedImage(null)}>✕</span>
                    <img src={selectedImage} alt="modal" className="modal-image" />
                </div>
            )}

            <RoomServices handleClick3={handleClick3} />
            <HomeFooter2 />
        </div>
    );
};

export default CameraAran;
