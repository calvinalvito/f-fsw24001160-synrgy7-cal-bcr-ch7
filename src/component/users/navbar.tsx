import React, {useEffect} from 'react';

const Navbar: React.FC = () => {
    useEffect(() => {
        const handleNavbarToggle = () => {
          const navbarMenu = document.querySelector('.navbar__menu');
          if (!navbarMenu) return; 
    
          document.body.classList.toggle('navbar-open');
          navbarMenu.classList.toggle('d-none');
        };
    
        const navbarBurger = document.querySelector('.navbar__burger');
        const navbarBack = document.querySelector('.navbar__back');
    
        if (!navbarBurger || !navbarBack) return;
    
        navbarBurger.addEventListener('click', handleNavbarToggle);
        navbarBack.addEventListener('click', handleNavbarToggle);
    
        return () => {
          navbarBurger.removeEventListener('click', handleNavbarToggle);
          navbarBack.removeEventListener('click', handleNavbarToggle);
        };
      }, []);
    return(
        <>
        <nav id="navbar" className="navbar">
        <div className="container-xl">
            <div className="navbar__brand d-flex justify-content-start align-items-center">
            Rental Mobil
            </div>

            <button className="btn navbar__burger d-flex d-md-none justify-content-end align-items-center" aria-label="Toggle Navigation Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18H21" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 12H21" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 6H21" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  
            </button>
            
            <div className="navbar__menu d-md-flex d-none flex-md-row flex-column justify-content-md-end align-items-md-center">
            <div className="d-flex flex-row d-md-none justify-content-between">
                <p style={{ marginRight: '85px' }}>BCR</p>
                <button className="btn navbar__back">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6L18 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>           
            </div>
            <ul className="d-flex flex-md-row flex-column list-unstyled m-0">
                <li className="nav__item">
                <a href="#">Our Services</a>
                </li>
                <li className="nav__item">
                <a href="#">Why Us</a>
                </li>
                <li className="nav__item">
                <a href="#">Testimonial</a>
                </li>
                <li className="nav__item">
                <a href="#">FAQ</a>
                </li>
            </ul>
            <div>
                <button className="button navbar__button" type="submit">Register</button>
            </div>
            </div>
        </div>
        </nav>
    </>
    );
}
export default Navbar;