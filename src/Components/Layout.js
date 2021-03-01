import React from "react";
import logoImage from "../Images/logo.png"
import "./Styles/Layout.css";

function Layout(props) {
  return (
    <section className="layout">
      <div className="logo">
        <div style={{backgroundImage:` url(${logoImage})`}}></div>
        {/* <i className="fas fa-hamburger"></i> */}
      </div>
      {props.children}
    </section>
  )
}

export default Layout;