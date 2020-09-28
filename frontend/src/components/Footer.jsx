import React from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className="background-footer">
      <div className="text-center">
        <h3>Siguenos en:</h3>
      </div>
          <div className="grid-footer">
            <ListGroup variant="flush">
              <ListGroupItem><Link className="nav-link p-0" to="/">Inicio</Link></ListGroupItem>
              <ListGroupItem><Link className="nav-link p-0" to="/service">Servicio</Link></ListGroupItem>
              <ListGroupItem><Link className="nav-link p-0" to="/about">Quienes somos</Link></ListGroupItem>
              <ListGroupItem><Link className="nav-link p-0" to="/contact">Contacto</Link></ListGroupItem>
            </ListGroup>
            <div className="line-through"></div>
              <img className="logo-pic" src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601078016/logo_vlpdzk.png" alt="kusco.png" />
            <div className="line-through"></div>
            <div className="social-footer">
              <a href="www.facebook.com/kuscococina" target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a>
              <a href="www.instagram.com/cateringkuscococina" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
          </div>
          <div className="text-center">
            <span>Derechos reservados &copy; Kusco Cocina</span>
          </div>
        </div>
  );
}
