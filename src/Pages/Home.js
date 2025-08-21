import HomeHeroCarousel from "../Component/HomeHeroCarousel";
import HomeDescriptionSection from "../Component/HomeDescriptionSection";
import HomeLuogoSection from "../Component/HomeLuogoSection";
import HomeContactSection from "../Component/HomeContactSection";

import HomeFooter2 from "../Component/Footer2";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";

function Home() {

    const navigate = useNavigate();


    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === '/') {
            // Se siamo già in homepage, scrolliamo direttamente
            const el = document.getElementById('form');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Altrimenti navighiamo alla homepage con stato
            navigate('/', { state: { scrollTo: 'form' } });
        }
    };
    return (
<div>
         <HomeHeroCarousel/>
        <HomeDescriptionSection handleClick={handleClick}/>
    <HomeLuogoSection/>
    <div className="form" id="form">
    <HomeContactSection/>
    </div>

    <HomeFooter2/>
</div>


    );}


export default Home;
