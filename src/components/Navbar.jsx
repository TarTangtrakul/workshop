import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <div>
        <nav className="navbar">
            <div className="navbar-brand">
            <Link className="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/about" className="navbar-item">About</Link> 
                    <Link to="/contact" className="navbar-item">Contact</Link>
                    <Link to="/form" className="navbar-item">Form</Link>
                </div>
            </div>
        </nav>
    </div>
}