import React, { useState } from 'react';
import '../Pages/CameraBlu.css';
import PersonIcon from '../Assets/Icon People.png';
import BathIcon from '../Assets/BathIcon.png';
import GardenIcon from '../Assets/Garden.png';
import RoomServices from "../Component/RoomServices";
import HomeFooter2 from "../Component/Footer2";
import { useLanguage } from "../Component/LanguageContext";

const CameraBlu = () => {
    const [currentIndex3, setCurrentIndex3] = useState(0);
    const [fade, setFade] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const [modalIndex, setModalIndex] = useState(0);

    const { language } = useLanguage();

    const t = {
        it: {
            title: "Camera Carlotta",
            people: "2 Persone",
            bath: "1 Bagno",
            view: "Vista Giardino",
            description: `La Camera Carlotta accoglie gli ospiti in un ambiente luminoso e vivace, con pareti dalle tonalità solari e arredi dallo stile classico e ricercato. Il soffitto in legno con travi a vista e il pavimento in cotto donano calore e autenticità alla stanza.

Grazie alla presenza di ampie finestre, la camera è inondata di luce naturale e si apre su un tranquillo scorcio di giardino. I dettagli dipinti a mano e i mobili in legno d’epoca creano un’atmosfera raffinata e familiare.`
        },
        en: {
            title: "Carlotta Room",
            people: "2 People",
            bath: "1 Bathroom",
            view: "Garden View",
            description: `The Carlotta Room welcomes guests into a bright and lively environment, with sunny-colored walls and refined classic-style furnishings. The wooden ceiling with exposed beams and terracotta flooring bring warmth and authenticity to the room.

Thanks to the large windows, the room is flooded with natural light and opens onto a peaceful garden view. Hand-painted details and vintage wooden furniture create a refined yet homely atmosphere.`
        }
    };

    const text = t[language];

    const galleryImages = [
        'RoomB1.jpg', 'RoomB2.jpg', 'RoomB3.jpg', 'RoomB4.jpg',
        'RoomB5.jpg', 'RoomB6.jpg', 'RoomB7.jpg', 'RoomB8.jpg'
    ];

    const openModal = (index) => {
        setModalIndex(index);
        setSelectedImg(`/Images/CameraBlu/${galleryImages[index]}`);
    };

    const closeModal = () => {
        setSelectedImg(null);
    };

    const prevImage = () => {
        const newIndex = (modalIndex - 1 + galleryImages.length) % galleryImages.length;
        setModalIndex(newIndex);
        setSelectedImg(`/Images/CameraBlu/${galleryImages[newIndex]}`);
    };

    const nextImage = () => {
        const newIndex = (modalIndex + 1) % galleryImages.length;
        setModalIndex(newIndex);
        setSelectedImg(`/Images/CameraBlu/${galleryImages[newIndex]}`);
    };

    return (
        <div className="camera-mirto-page">
            {/* Hero con carosello */}
            <section className="camera-hero-carousel2">
                <img
                    src={`/Images/CameraBlu/RoomB${currentIndex3 + 1}.jpg`}
                    alt={`camera mirto ${currentIndex3 + 1}`}
                    className={`carousel-image2 ${fade ? 'fade' : ''}`}
                />
                <div className="camera-overlay2">
                    <h1>{text.title}</h1>
                </div>
                <button className="carousel-btn2 left" onClick={() => {
                    setFade(true);
                    setTimeout(() => {
                        setCurrentIndex3((prev) => (prev === 0 ? 7 : prev - 1));
                        setFade(false);
                    }, 200);
                }}>
                    ‹
                </button>
                <button className="carousel-btn2 right" onClick={() => {
                    setFade(true);
                    setTimeout(() => {
                        setCurrentIndex3((prev) => (prev === 7 ? 0 : prev + 1));
                        setFade(false);
                    }, 200);
                }}>
                    ›
                </button>
            </section>

            {/* Badge dettagli */}
            <section className="camera-details2">
                <div className="badge-item2">
                    <img src={PersonIcon} alt="persone" />
                    <span>{text.people}</span>
                </div>
                <div className="badge-item2">
                    <img src={BathIcon} alt="bagno" />
                    <span>{text.bath}</span>
                </div>
                <div className="badge-item2">
                    <img src={GardenIcon} alt="vista giardino" />
                    <span>{text.view}</span>
                </div>
            </section>

            {/* Descrizione e galleria */}
            <section className="camera-description2">
                <p className="camera-text2">
                    {text.description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                        </React.Fragment>
                    ))}
                </p>

                <div className="camera-gallery2">
                    {galleryImages.map((src, index) => (
                        <img
                            key={index}
                            src={`/Images/CameraBlu/${src}`}
                            alt={`camera mirto ${index + 1}`}
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>
            </section>

            {/* Modale immagine fullscreen */}
            {selectedImg && (
                <div className="camera-modal" onClick={closeModal}>
                    <span className="modal-close" onClick={closeModal}>✕</span>
                    <button className="modal-arrow left" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
                    <img src={selectedImg} alt="fullscreen" className="modal-image" />
                    <button className="modal-arrow right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
                </div>
            )}

            <RoomServices />
            <HomeFooter2 />
        </div>
    );
};

export default CameraBlu;
