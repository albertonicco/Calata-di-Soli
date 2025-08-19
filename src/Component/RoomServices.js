import React from 'react';
import './RoomServices.css';
import {
    FaWifi,
    FaShower,
    FaBroom,
    FaGlassMartiniAlt,
    FaFan
} from 'react-icons/fa';
import { MdOutlineDryCleaning } from 'react-icons/md'; // asciugamani
import { Link } from 'react-router-dom';
import { useLanguage } from '../Component/LanguageContext';

const RoomServices = () => {
    const { language } = useLanguage();

    const t = {
        it: {
            fan: "Ventilatore da soffitto",
            wifi: "Wi-Fi gratuito",
            shower: "Bagno privato con doccia",
            towels: "Set di cortesia e asciugamani",
            cleaning: "Pulizia giornaliera",
            minibar: "Frigobar e bollitore",
            button: "RICHIEDI INFORMAZIONI"
        },
        en: {
            fan: "Ceiling fan",
            wifi: "Free Wi-Fi",
            shower: "Private bathroom with shower",
            towels: "Courtesy set and towels",
            cleaning: "Daily cleaning",
            minibar: "Minibar and kettle",
            button: "REQUEST INFORMATION"
        }
    };

    const text = t[language];

    return (
        <section className="room-services">
            <div className="services-wrapper">
                <div className="services-grid">
                    <div className="service-item">
                        <FaFan className="service-icon" />
                        <span>{text.fan}</span>
                    </div>
                    <div className="service-item">
                        <FaWifi className="service-icon" />
                        <span>{text.wifi}</span>
                    </div>
                    <div className="service-item">
                        <FaShower className="service-icon" />
                        <span>{text.shower}</span>
                    </div>
                    <div className="service-item">
                        <MdOutlineDryCleaning className="service-icon" />
                        <span>{text.towels}</span>
                    </div>
                    <div className="service-item">
                        <FaBroom className="service-icon" />
                        <span>{text.cleaning}</span>
                    </div>
                    <div className="service-item">
                        <FaGlassMartiniAlt className="service-icon" />
                        <span>{text.minibar}</span>
                    </div>
                </div>

                <Link to="/#form" className="services-button">
                    <button>{text.button}</button>
                </Link>
            </div>
        </section>
    );
};

export default RoomServices;
