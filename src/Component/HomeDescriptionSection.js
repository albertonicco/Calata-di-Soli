import logo from '../Assets/Logosole.png';
import overlayImg from '../Assets/apertura5.jpg';
import React from 'react';
import './HomeDescriptionSection.css';
import { Link } from "react-router-dom";
import { useScrollToForm } from "./ScrollToForm";
import { useLanguage } from '../Component/LanguageContext';

const HomeDescriptionSection = () => {
    const scrollToForm = useScrollToForm();
    const { language } = useLanguage();

    const t = {
        it: {
            title: "B&B La Calata di Soli",
            description: (
                <>
                    La Calata di Soli si trova all’Argentiera, un piccolo borgo sospeso tra terra e mare, intriso di
                    storia mineraria e circondato da una natura selvaggia e autentica. Le vestigia della vecchia
                    miniera convivono con il paesaggio della macchia mediterranea, dove rosmarino, mirto e ginepro
                    rilasciano profumi che penetrano nei sensi.<br/><br/>
                    Qui, addormentarsi e risvegliarsi ha un sapore diverso: senza quasi accorgercene, il corpo
                    ritrova il suo ritmo naturale, rallenta, respira meglio. Le camere, curate con attenzione e
                    dotate di ogni comfort, creano un’atmosfera intima e accogliente, perfetta per chi cerca
                    tranquillità e qualità. <br/><br/>
                    Ma è al tramonto che Calata di Soli regala il suo momento più straordinario: il sole, calando
                    lentamente sul mare, tinge il cielo di sfumature dorate e rosate, in un gioco di colori che
                    abbraccia il cuore e rigenera la mente e il corpo.
                    Qui ogni soggiorno diventa un’esperienza intima e preziosa, lontano dal rumore, immersi in una
                    Sardegna che sa ancora sorprendere.
                </>
            ),
            discover: "SCOPRI LE CAMERE",
            contact: "CONTATTACI"
        },
        en: {
            title: "B&B La Calata di Soli",
            description: (
                <>
                    La Calata di Soli is located in Argentiera, a small village suspended between land and sea, rich in mining history and surrounded by wild, authentic nature. The remnants of the old mine blend with the Mediterranean landscape, where rosemary, myrtle, and juniper release scents that awaken the senses.<br/><br/>
                    Here, falling asleep and waking up has a different flavor: almost without noticing, the body finds its natural rhythm, slows down, breathes better. The rooms, carefully curated and equipped with every comfort, create an intimate and welcoming atmosphere—perfect for those seeking peace and quality.<br/><br/>
                    But it’s at sunset that Calata di Soli offers its most extraordinary moment: the sun slowly setting over the sea paints the sky with golden and pink hues, in a play of colors that embraces the heart and rejuvenates the mind and body.
                    Here, every stay becomes an intimate and precious experience, far from the noise, immersed in a Sardinia that still knows how to surprise.
                </>
            ),
            discover: "DISCOVER OUR ROOMS",
            contact: "CONTACT US"
        }
    };

    const text = t[language];

    return (
        <section className="home-description-container">
            <div className="home-description-card">
                <div className="text-section">
                    <div className="watermark" />
                    <img src={logo} alt="Logo" className="logo" />
                    <h2 className="title">{text.title}</h2>

                    <p className="description">{text.description}</p>

                    <div className="buttons">
                        <Link to="/camere">
                            <button className="btn-blue">{text.discover}</button>
                        </Link>
                        <button className="btn-blue" onClick={scrollToForm}>{text.contact}</button>
                    </div>
                </div>

                <div className="separators"></div>
                <div className="mobile-separator"></div>

                <div className="image-section">
                    <img src={overlayImg} alt="Esterno" className="main-photo" />
                </div>
            </div>
        </section>
    );
};

export default HomeDescriptionSection;
