import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <Fragment>
      <Navbar bg="primary" variant="dark" expand="lg" id="nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link className="nav-link text-white" to="/">
              Inicio
            </Link>
            <Link className="nav-link text-white" to="/service">
              Servicios
            </Link>
            <Link className="nav-link text-white" to="/about">
              Sobre nosotros
            </Link>
            <Link className="nav-link text-white" to="/contact">
              Contactanos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <section className="background-header text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4 ">
              <div className="header-container" id="header">
                <div className="head">
                  <img
                    className="logo"
                    src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601078016/kusco_gallery/logo_vlpdzk.png"
                    alt="kusco.png"
                  />
                  <h3 className="text-white">Catering</h3>
                  <h2 className="kusco text-white">Kusco Cocina</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
