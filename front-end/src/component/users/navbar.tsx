import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleNavbarToggle = () => {
      const navbarMenu = document.querySelector(".navbar__menu");
      if (!navbarMenu) return;

      document.body.classList.toggle("navbar-open");
      navbarMenu.classList.toggle("d-none");
    };

    const navbarBurger = document.querySelector(".navbar__burger");
    const navbarBack = document.querySelector(".navbar__back");

    if (!navbarBurger || !navbarBack) return;

    navbarBurger.addEventListener("click", handleNavbarToggle);
    navbarBack.addEventListener("click", handleNavbarToggle);

    return () => {
      navbarBurger.removeEventListener("click", handleNavbarToggle);
      navbarBack.removeEventListener("click", handleNavbarToggle);
    };
  }, []);

  return (
    <>
      <nav id="navbar" className="navbar">
        <div className="container-xl">
          <div className="navbar__brand d-flex justify-content-start align-items-center">
            Rental Mobil
          </div>

          <button
            className="btn navbar__burger d-flex d-md-none justify-content-end align-items-center"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18H21"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H21"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="navbar__menu d-md-flex d-none flex-md-row flex-column justify-content-md-end align-items-md-center">
            <div className="d-flex flex-row d-md-none justify-content-between">
              <p style={{ marginRight: "85px" }}>BCR</p>
              <button className="btn navbar__back">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#222222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#222222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
            {user ? (
              <div
                className="dropdown d-flex flex-row"
                style={{ paddingLeft: "24px" }}
              >
                <div>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19" cy="19" r="19" fill="#CFD4ED" />
                    <path
                      d="M13.924 12.6465H16.3693V19.7247C16.3693 20.5163 16.4631 21.0945 16.6506 21.459C16.9422 22.1049 17.5776 22.4278 18.5568 22.4278C19.5308 22.4278 20.1636 22.1049 20.4553 21.459C20.6428 21.0945 20.7365 20.5163 20.7365 19.7247V12.6465H23.1818V19.7247C23.1818 20.9486 22.9917 21.9018 22.6115 22.584C21.9032 23.834 20.5516 24.459 18.5568 24.459C16.562 24.459 15.2079 23.834 14.4943 22.584C14.1141 21.9018 13.924 20.9486 13.924 19.7247V12.6465Z"
                      fill="#151515"
                    />
                  </svg>
                </div>
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.username}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a className="dropdown-item" href="#" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                className="button navbar__button"
                type="button"
                onClick={handleRegisterClick}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
