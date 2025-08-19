import React from "react";
import "./Footer.css";
import logo from "../Assets/Logo.png"; // Inserisci il tuo logo corretto

const HomeFooter = () => {
    return (
        <footer className="footer">
            {/* Prima sezione */}
            <div className="footer-top">
                <img src={logo} alt="Calata di Soli Logo" className="footer-logo" />
                <div className="footer-divider"></div>
                <p className="footer-line">Località Argentiera, 21000 Sardegna</p>
                <p className="footer-line">Tel:<strong> +39 333 1234567 </strong></p>
                <p className="footer-line">Email:<strong> info@calatadisoli.it</strong></p>
                <p className="footer-line">P. IVA: 01234567890</p>
            </div>

            {/* Seconda sezione */}
            <div className="footer-bottom">
                © Calata di Soli - Tutti i diritti riservati • <span className="policy">Privacy Policy</span> • <span className="policy">Cookie Policy</span>
            </div>
        </footer>
    );
};

export default HomeFooter;
