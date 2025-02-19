import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <nav className="header">
            <div className="logo">Stephen</div>
            <ul className="nav-items">
                <li><a href="#About">About</a></li>
                <li><a href="#tiles">Tiles</a></li>
                <li><a href="#key-actions">Key Actions</a></li>
                <li><a href="#harrisonburg-explorer">Harrisonburg Explorer</a></li>
                <li><a href="#resume-section">Resume</a></li>
            </ul>
        </nav>
    );
}

export default Header;