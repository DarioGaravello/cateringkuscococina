import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../styles/NotPageFound.css';

export default function NotPageFound() {
    return (
        <div className="page-container text-center">
            <div className="background-container">
                <h1>Ups!<br/> Ocurrió un problema</h1>
                <h3>No se encuentra la direccion: <code>{useLocation().pathname}</code></h3>
                <Button variant="outline-dark">
                    <Link className="nav-link text-white" to="/">Volver al menú principal</Link>
                </Button>
            </div>
        </div>
    )
}
