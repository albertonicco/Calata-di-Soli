import React from 'react';
import HomeFooter2 from "./Footer2";
import { useLanguage } from "../Component/LanguageContext";

const PrivacyPolicy = () => {
    const { language } = useLanguage();

    const content = {
        it: {
            title: "Privacy Policy",
            updated: "Ultimo aggiornamento: Agosto 2025",
            sections: [
                {
                    heading: "1. Titolare del Trattamento",
                    text: `La Calata di Soli\nVia Monteponi 13, 07040 Argentiera (SS)\nEmail: info@calatadisoli.net\nTelefono: +39 335 818 4083`
                },
                {
                    heading: "2. Tipologie di Dati raccolti",
                    text: `Raccogliamo dati personali (nome, email, telefono) forniti volontariamente tramite il modulo contatti e dati di navigazione (IP, browser, orario di accesso) tramite cookie tecnici e di terze parti.`
                },
                {
                    heading: "3. Finalità del trattamento",
                    text: `Rispondere a richieste, migliorare l’esperienza utente, adempiere ad obblighi di legge.`
                },
                {
                    heading: "4. Base giuridica",
                    text: `Consenso dell’utente, interesse legittimo del titolare, obblighi di legge.`
                },
                {
                    heading: "5. Modalità di trattamento",
                    text: `Trattiamo i dati in modo sicuro, sia in forma digitale che cartacea.`
                },
                {
                    heading: "6. Conservazione",
                    text: `I dati sono conservati per il tempo necessario a soddisfare le finalità dichiarate, o per obblighi normativi.`
                },
                {
                    heading: "7. Comunicazione e trasferimento",
                    text: `I dati non sono venduti. Possono essere condivisi con fornitori tecnici o autorità, e non sono trasferiti fuori UE senza garanzie.`
                },
                {
                    heading: "8. Diritti dell’utente",
                    text: `Hai diritto ad accedere, correggere, cancellare i tuoi dati, limitarne o opporti al trattamento, chiedere la portabilità e proporre reclamo al Garante (www.garanteprivacy.it).`
                },
                {
                    heading: "9. Modifiche",
                    text: `Questa informativa può essere aggiornata. Controlla periodicamente questa pagina.`
                },
                {
                    heading: "10. Accettazione",
                    text: `Navigando su questo sito accetti questa informativa.`
                }
            ]
        },

        en: {
            title: "Privacy Policy",
            updated: "Last updated: August 2025",
            sections: [
                {
                    heading: "1. Data Controller",
                    text: `La Calata di Soli\nVia Monteponi 13, 07040 Argentiera (SS)\nEmail: info@calatadisoli.net\nPhone: +39 335 818 4083`
                },
                {
                    heading: "2. Types of Data Collected",
                    text: `We collect personal data (name, email, phone) via contact form, and browsing data (IP, browser, time) via cookies.`
                },
                {
                    heading: "3. Purpose of Data Processing",
                    text: `To respond to inquiries, enhance user experience, comply with legal obligations.`
                },
                {
                    heading: "4. Legal Basis",
                    text: `User consent, legitimate interest, legal obligation.`
                },
                {
                    heading: "5. Data Processing Methods",
                    text: `Data is processed securely both digitally and on paper.`
                },
                {
                    heading: "6. Retention",
                    text: `Data is retained for the necessary period to fulfill purposes or legal obligations.`
                },
                {
                    heading: "7. Disclosure and Transfer",
                    text: `Data is not sold. It may be shared with service providers or authorities and is not transferred outside the EU without proper safeguards.`
                },
                {
                    heading: "8. User Rights",
                    text: `You can access, rectify, delete your data, limit or object to processing, request portability, and file a complaint to the Authority (www.garanteprivacy.it).`
                },
                {
                    heading: "9. Changes",
                    text: `This policy may be updated. Please check this page regularly.`
                },
                {
                    heading: "10. Acceptance",
                    text: `By browsing this site, you accept this policy.`
                }
            ]
        }
    };

    const selected = content[language];

    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1>{selected.title}</h1>
            <p style={{ fontStyle: "italic", marginBottom: "2rem" }}>{selected.updated}</p>

            {selected.sections.map((section, index) => (
                <div key={index} style={{ marginBottom: "1.8rem" }}>
                    <h2 style={{ color: "#19475c", fontSize: "1.4rem", marginBottom: "0.4rem" }}>
                        {section.heading}
                    </h2>
                    <p style={{ whiteSpace: "pre-line", lineHeight: "1.7" }}>{section.text}</p>
                </div>
            ))}

            <HomeFooter2 />
        </div>
    );
};

export default PrivacyPolicy;
