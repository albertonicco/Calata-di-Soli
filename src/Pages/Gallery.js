import React, { useState } from 'react';
import './Gallery.css';
import HomeFooter2 from "../Component/Footer2";
import { Link } from "react-router-dom";
import { useLanguage } from '../Component/LanguageContext';

const images = [
    'DJI_0325 copy.JPG', 'DJI_0331.JPG', 'DJI_0333.JPG', 'DJI_0335.JPG',
    'DJI_0339 copy.JPG', 'DJI_0341.JPG', 'DJI_0351 copy.jpg', 'DJI_0358 copy.JPG',
    'DJI_0365.JPG', 'DJI_0366.JPG', 'DSC06577 copia.jpg',
    'DSC06647 copia.jpg', 'DSC06742.jpg', 'DSC06766 copia.jpg', 'DSC06839 copia.jpg',
    'DSC06844 copia.jpg', 'DSC06848 copia copy.jpg', 'DSC06854 copia.jpg',
    'DSC06855 copia.jpg', 'DSC06857 copia.jpg', 'DSC06859 copia.jpg',
    'IMG_1617.jpeg', 'IMG_1654 copy.jpeg', 'IMG_1662.jpeg'
];

const Gallery = () => {
    const { language } = useLanguage();
    const [selectedImg, setSelectedImg] = useState(null);

    const t = {
        it: {
            title: "Gallery fotografica",
            description: `Qui troverete tutte le foto che raccontano la magia di Calata di Soli: 
panorami suggestivi, dettagli delle camere e momenti indimenticabili immersi nella natura selvaggia e autentica.`,
            button: "RICHIEDI INFORMAZIONI"
        },
        en: {
            title: "Photo Gallery",
            description: `Here you will find all the photos that capture the magic of Calata di Soli: 
breathtaking views, room details, and unforgettable moments immersed in authentic and wild nature.`,
            button: "REQUEST INFORMATION"
        }
    };

    const text = t[language];

    return (
        <div className="gallery-page">
            <section className="gallery-hero">
                <h1>{text.title}</h1>
                <div className="separatorgallery"></div>
            </section>

            <section className="gallery-description">
                <p>{text.description}</p>
            </section>

            <section className="gallery-grid">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={`/Images/Gallery/${img}`}
                        alt={`gallery-${index}`}
                        onClick={() => setSelectedImg(`/Images/Gallery/${img}`)}
                    />
                ))}
            </section>

            {selectedImg && (
                <div className="gallery-modal" onClick={() => setSelectedImg(null)}>
                    <span className="close-button" onClick={() => setSelectedImg(null)}>✕</span>
                    <img src={selectedImg} alt="selected" />
                </div>
            )}

            <Link to="/#form" className="form-button">
                <button>{text.button}</button>
            </Link>

            <HomeFooter2 />
        </div>
    );
};

export default Gallery;
