import React, { useState } from 'react';
import './HomeHeroCarousel.css';
import { useLanguage } from '../Component/LanguageContext';

import img1 from '../Assets/apertura2.jpg';
import img2 from '../Assets/apertura.jpg';
import img3 from '../Assets/apertura4.JPG';
import img4 from '../Assets/apertura5.jpg';
import img5 from '../Assets/apertura6.jpg';
import img6 from '../Assets/duecamere.jpg';
import img7 from '../Assets/CameraBlu/DJI_0331.JPG';
import img8 from '../Assets/CameraBlu/DJI_0335.JPG';
import img9 from '../Assets/CameraBlu/DJI_0333.JPG';
import img10 from '../Assets/CameraBlu/DJI_0365.JPG';
import img11 from '../Assets/CameraBlu/DJI_0366.JPG';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const HomeHeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const { language } = useLanguage();

    const t = {
        it: {
            subtitle: 'B&B a Sassari',
            title: 'LA CALATA DI SOLI',
            tagline: 'Bed & Breakfast',
            button: 'Prenota Ora'
        },
        en: {
            subtitle: 'B&B in Sardinia',
            title: 'LA CALATA DI SOLI',
            tagline: 'Bed & Breakfast',
            button: 'Book Now'
        }
    };

    const text = t[language];

    const changeSlide = (next = true) => {
        setIsFading(true);
        setPrevIndex(currentIndex);
        setTimeout(() => {
            setCurrentIndex(prev => (next
                ? (prev + 1) % images.length
                : (prev - 1 + images.length) % images.length));
            setIsFading(false);
        }, 400);
    };

    return (
        <section className="custom-carousel-wrapper">
            <div
                className="carousel-bg bg-prev"
                style={{ backgroundImage: `url(${images[prevIndex]})`, opacity: 1 }}
            />
            <div
                className={`carousel-bg bg-current ${isFading ? 'fade-in' : ''}`}
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />

            <div className="carousel-overlay" />

            <div className="carousel-content">
                <p className="hero-subtitle">{text.subtitle}</p>
                <h1 className="hero-title">{text.title}</h1>
                <h2 className="hero-tagline">{text.tagline}</h2>
                <a href="/contatti" className="hero-button">{text.button}</a>
            </div>

            <button className="arrow left-arrow" onClick={() => changeSlide(false)}>&#8592;</button>
            <button className="arrow right-arrow" onClick={() => changeSlide(true)}>&#8594;</button>
        </section>
    );
};

export default HomeHeroCarousel;
