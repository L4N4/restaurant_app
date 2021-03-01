import React from "react";

import { Link } from "react-router-dom";

import logoImage from "../Images/logo.png";
import "./Styles/Home.css";

function Home() {
  return (
    <section className="home">
      <div className="logo">
        <div style={{backgroundImage:` url(${logoImage})`}}></div>
        {/* <i className="fas fa-hamburger"></i> */}
      </div>

      <Link  to="/menu" className="button">
        ¡ORDENAR AHORA!
        <i className="fas fa-hand-point-up"></i>
      </Link>

      <div className="networks">
        <p>Visítanos:</p>
        <a href="https://www.instagram.com/yameritotaqueria/"> <i className="fab fa-instagram"></i> </a>
      </div>
    </section>
  )
}

export default Home;