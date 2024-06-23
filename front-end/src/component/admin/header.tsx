import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <div className="sidebar__header d-flex align-items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 18H21"
            stroke="#151515"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12H21"
            stroke="#151515"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="#151515"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="d-flex position-absolute end-0"
          style={{ paddingRight: "24px" }}
        >
          <form className="form-inline d-flex flex-row">
            <div className="form-group mx-sm-3">
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Search"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
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
              {user ? user.role : "User"}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
