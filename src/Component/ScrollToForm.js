// utils/scrollToForm.js
import { useNavigate, useLocation } from 'react-router-dom';

export const useScrollToForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToForm = () => {
        if (location.pathname === '/') {
            const el = document.getElementById('form');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { scrollTo: 'form' } });
        }
    };

    return scrollToForm;
};
