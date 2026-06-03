import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const captialize = (message) => {
    const lower = message.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  let style = {
    color: props.mode === "light" ? "black" : "white",
  };
  return (
    <div>
      <nav
        className={`navbar bg-${props.mode} navbar-expand-lg`}
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand  text-${props.mode === "light" ? "black" : "light"}`}
            tp="/"
          >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars" style={style}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link text-${props.mode === "light" ? "black" : "light"}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${props.mode === "light" ? "black" : "light"}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-primary border border-white rounded" onClick={()=> props.modeChange('primary')}
                style={{ height: "40px", width: "40px", cursor:"pointer" }}
              > </div>
              <div
                className="bg-danger border border-white rounded" onClick={()=> props.modeChange('danger')}
                style={{ height: "40px", width: "40px", cursor:"pointer" }}
              ></div>
              <div
                className="bg-success border border-white rounded" onClick={()=> props.modeChange('success')}
                style={{ height: "40px", width: "40px", cursor:"pointer" }}
              ></div>
             
              <div
                className="bg-dark border border-light rounded" onClick={()=> props.modeChange('dark')}
                style={{ height: "40px", width: "40px", cursor:"pointer" }}
              ></div>
              <div
                className="bg-light border border-dark rounded" onClick={()=> props.modeChange('light')}
                style={{ height: "40px", width: "40px", cursor:"pointer" }}
              ></div>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Text here",
  aboutText: "About Text here",
};
