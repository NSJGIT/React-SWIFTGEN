import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <ul>
            <li className="nav"><Link to="/">Home</Link></li>
            <li className="nav" id="nav2"><Link to="/SWIFT">SWIFT Generator</Link></li>
            <li className="nav" id="nav3"><Link to="/Rec">Reconciler</Link></li>
        </ul>
    );
}

export default NavBar;