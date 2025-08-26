import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './Component/Header';
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';

import Booking from './Pages/Booking';
import Contacts from "./Pages/Contacts";
import CameraBlu from "./Pages/CameraBlu";
import CameraAran from "./Pages/CameraAran";
import {useLocation} from "react-router-dom";

import './App.css';

import ScrollToTop from "./Component/ScrollToTop";
import FloatingContactButton from "./Component/FloatingContactButton";
import {LanguageProvider} from "./Component/LanguageContext";
import {useEffect} from "react";
import PrivacyPolicy from "./Component/PrivacyPolicy";

function App() {
    function ScrollToAnchorOnMount() {
        const location = useLocation();

        useEffect(() => {
            if (location.hash) {
                const el = document.getElementById(location.hash.replace('#', ''));
                if (el) {
                    setTimeout(() => {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }, 100); // attende il DOM
                }
            }
        }, [location]);

        return null;
    }
  return (
      <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop/>
          <ScrollToAnchorOnMount/>
        <div className="App">
          <Header />
          <main>

            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/camere" element={<Rooms />}></Route>
              <Route path="/camere/camerablu" element={<CameraBlu />}/>
              <Route path="/camere/cameraarancione" element={<CameraAran />}/>

              <Route path="/servizi" element={<Services />} />

                <Route path="/gallery" element={<Gallery />} />


                <Route path="/prenotazione" element={<Booking />} />
                <Route path="/contatti" element={<Contacts />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
        </div>
          <FloatingContactButton/>
      </BrowserRouter>
      </LanguageProvider>
  );
}

export default App;

