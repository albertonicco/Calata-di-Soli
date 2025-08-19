import logo3 from '../Assets/Logosole.png';
import overlayImg from '../Assets/foto bonus.jpg';
import React from 'react';
import './HomeLuogoSection.css';
import { Link } from "react-router-dom";
import { useLanguage } from '../Component/LanguageContext';

const HomeLuogoSection = () => {
    const { language } = useLanguage();

    const t = {
        it: {
            title: "L'Argenteria",
            description: (
                <>
                    A pochi passi si trovano le due spiagge dell’Argentiera, bagnate da un mare cristallino e incorniciate da falesie rocciose e vegetazione spontanea. Il vento maestrale, che spesso accarezza la costa, regala freschezza e contribuisce a creare un’atmosfera quasi mistica, perfetta per chi cerca quiete e autenticità.<br /><br />
                    L’Argentiera è strategicamente posizionata tra due dei tratti di costa più iconici della Sardegna: da un lato Stintino, con la sua celebre spiaggia La Pelosa, dalle acque trasparenti e dalla sabbia chiarissima; dall’altro, Alghero, città viva e affascinante affacciata sul mare, con spiagge come Le Bombarde, Maria Pia e Lazzaretto.<br /><br />
                    Lungo questo tratto di costa si susseguono scenari mozzafiato: <br />
                    – le Grotte di Nettuno, nascoste tra le scogliere di Capo Caccia, scolpite dal tempo e dall’acqua <br />
                    – la selvaggia spiaggia di Porto Ferro, amata da surfisti e amanti degli spazi aperti <br />
                    – la quieta bellezza di Cala Viola, Cala Sabina, e Porto Palmas, con la loro sabbia dorata e i fondali limpidi <br />
                    – l'isola dell'Asinara, riserva naturale dal fascino incontaminato <br />
                </>
            ),
            button: "SCOPRI I SERVIZI"
        },
        en: {
            title: "L'Argentiera",
            description: (
                <>
                    Just a few steps away are the two beaches of Argentiera, kissed by crystal-clear waters and framed by rocky cliffs and spontaneous vegetation. The Mistral wind, which often brushes the coast, brings freshness and creates an almost mystical atmosphere — perfect for those seeking peace and authenticity.<br /><br />
                    Argentiera is strategically positioned between two of Sardinia’s most iconic coastal stretches: on one side, Stintino with its famous La Pelosa beach, known for its clear waters and bright sand; on the other, Alghero — a vibrant and charming seaside town with beaches like Le Bombarde, Maria Pia, and Lazzaretto.<br /><br />
                    Along this stretch of coast, breathtaking sceneries follow one another: <br />
                    – Neptune’s Caves, hidden among the cliffs of Capo Caccia, carved by time and water <br />
                    – the wild beach of Porto Ferro, loved by surfers and nature lovers <br />
                    – the quiet beauty of Cala Viola, Cala Sabina, and Porto Palmas, with golden sand and clear waters <br />
                    – the Asinara Island, a natural reserve with unspoiled charm <br />
                </>
            ),
            button: "DISCOVER OUR SERVICES"
        }
    };

    const text = t[language];

    return (
        <section className="home-description-container2">
            <div className="home-description-card2">
                <div className="image-section2">
                    <img src={overlayImg} alt="Esterno" className="main-photo2" />
                </div>

                <div className="separators2"></div>
                <div className="mobile-separator2"></div>

                <div className="text-section2">
                    <h2 className="title2">{text.title}</h2>
                    <p className="description2">{text.description}</p>

                    <Link to="/servizi">
                        <button className="btn-blue2" onClick={() => window.scrollTo(0, 0)}>{text.button}</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeLuogoSection;
