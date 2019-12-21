import React from 'react'
import logo from '../../images/logo.png'
import video from '../../videos/spotlight.mp4'
import './Landing.css'

const Landing = () => {
    return (
        <header>
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src={video} type="video/mp4" />
        </video>
        <div class="container h-100 parallax-container">
            <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                    <img src={logo} class="img-fluid logo" alt="Responsive image" />
                    <p class="lead mb-0 spacer">a crime database aggregator, search engine, analysis, and collaboration tool</p>
                </div>
            </div>
        </div>
        </header>
    )
}

export default Landing
