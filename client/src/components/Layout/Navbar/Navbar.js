import React from 'react'
import './Navbar.css'
import logo from '../../../images/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            {/* <a className="navbar-brand" id="brand" href="/"><img src={logo} className="img-fluid smLogo" alt="Case By Case logo" /></a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup"></div>
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="/about">About&nbsp;</a>
                <a className="nav-item nav-link" href="/contact"><i className="far fa-paper-plane menuIcons"></i>&nbsp;Contact Us</a>
                <a className="nav-item nav-link" href="/contact"><i class="fas fa-user-plus menuIcons"></i>&nbsp;Register</a>
                <a className="nav-item nav-link" href="/contact"><i class="fas fa-sign-in-alt menuIcons"></i>&nbsp;Login</a>
            </div>
        </nav>
    )
}

export default Navbar
