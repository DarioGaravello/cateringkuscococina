import React from "react";
import "../../styles/Home.css";

export default function Home() {
  return (
    <div className="background-home">
      <div className="row">
        <div className="container-home">
          <div className="col">
            <div className="welcome-one" id="one">
              <h2>Bienvenidos a</h2>
              <h2>Kusco Cocina</h2>
            </div>
          </div>
          <div className="col">
            <img
              src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601077897/kusco_gallery/welcome1_x6k1md.jpg"
              alt="img.jpg"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container-home">
          <div className="col">
            <img
              src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601077896/kusco_gallery/welcome2_bfzovd.jpg"
              alt="img.jpg"
            />
          </div>
          <div className="col">
            <div className="welcome-two" id="two">
              <h2>Donde el evento</h2>
              <h2>de tus sueños</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container-home">
          <div className="col">
            <div className="welcome-three" id="three">
              <h2>Se hace realidad</h2>
            </div>
          </div>
          <div className="col">
            <img
              src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601077897/kusco_gallery/welcome3_c6l1xa.jpg"
              alt="img.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
