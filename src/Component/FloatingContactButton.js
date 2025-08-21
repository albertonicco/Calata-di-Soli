// FloatingContactButton.jsx
import React from 'react';

import './FloatingContactButton.css';
import { Link} from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';

const FloatingContactButton = () => {

    return (
        <Link id="floatingContactButton" to="/#form">
        <button className="floating-button"  title="Scrivici">
            <FaRegEdit className="floating-icon" />
        </button>
</Link>
    );
};

export default FloatingContactButton;
