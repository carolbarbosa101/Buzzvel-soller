import React from 'react';
import './Header.css';
import './Hero.css';
import '../index.css';
import phoneIcon from '../assets/icons/phone.svg';
import imageMan from '../assets/images/Man_installing_solar_panel.svg';
import imageUser from '../assets/images/User-thumb.png';
import arrowIcon from '../assets/icons/arrow.svg';


const Header = () => {
    return (
        <div className="main">

            <div className="header-left">
                <div className="logo">Soller</div>

                <nav className="nav">
                    <ul>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#solutions">Solutions</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#configure">Configure</a></li>
                    </ul>
                </nav>
                <div className="buttons-group">
                    <button className="phone-button">
                        <img src={phoneIcon} alt="Phone icon" className="phone-icon" />
                        555 818 282
                    </button>
                    <button className="ctaButton">Request a Quote
                        <img src={arrowIcon} alt="Arrow icon" className="arrow-icon" />
                    </button>
                </div>
            </div>

            <div className="header-rigth">
                <div className="hero-right">
                    <div className="heroImage">
                        <img src={imageMan} alt="Man installing solar panel" className="solar-panel-image" />
                    </div>
                </div>
            </div>
        
            <div className="heroText">
        <h1 className="title">Get the Sun to <br /> Power Your Home</h1>
        <p className="paragraph1">Viverra viverra nibh enim et aliquam, enim. Tempor, sit<br />mus viverra orci dui consequat turpis scelerisque.</p>
        <button className="ctaButton">Request a Quote
            <img src={arrowIcon} alt="Arrow icon" className="arrow-icon" />
        </button>

        <div className="testimonial-card">
            <p className="paragraph-testimonial">
                “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
            </p>
            <div className="testimonial-profile">
                <img src={imageUser} alt="Rwanda Melflor" className="profile-image" />
                <div className="profile-info">
                    <span className="profile-name">Rwanda Melflor</span>
                    <span className="profile-link">zerowaste.com</span>
                </div>
            </div>
        </div>
            </div>
      
        </div>
    );
};

export default Header;