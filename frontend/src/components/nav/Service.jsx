import React from 'react'
import '../../styles/Service.css'

export default function Service() {
    return (
        <section className="service-container">
        <div className="box-budget">
          <canvas
            className="line-canvas"
            width="320"
            height="5"
            style={{ backgroundColor: "#fff" }}
          />
          <h1 className="title-budget text-white py-2">Presupuestos</h1>
          <canvas
            className="line-canvas"
            width="320"
            height="5"
            style={{ backgroundColor: "#fff" }}
          />
          <p className="text-service pt-2" id="text-service" style={{fontSize: '18px'}}>
            Los presupuestos que se encuentran en la página, son los más pedidos y
            utilizados para todo tipo de eventos. Si desea un presupuesto
            personalizado, puede ir a nuestra sección de{" "}
            <a href="/contact#form">Contacto</a> y escribir su consulta que va
            directa a nuestro mail.
          </p>
        </div>
        <section className="box-estimate">
          <div className="estimate py-3">
            <h1>Combos</h1>
            <div className="box-pics">
              <a href="#">
                <img src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601078012/kusco_gallery/combo-i_rsmxfa.png"/>
              </a>
              <a href="#">
                <img src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601078012/kusco_gallery/combo-ii_jzhcrv.png"/>
              </a>
              <a href="#">
                <img src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601078012/kusco_gallery/combo-iii_cyigyn.png"/>
              </a>
            </div>
          </div>
          <div className="estimate py-3">
            <h1>Finger Food</h1>
            <div className="box-pics">
              <a href="#">
                <img src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601078013/kusco_gallery/finger-food-i_fddxue.png"/>
              </a>
              <a href="#">
                <img src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601078013/kusco_gallery/finger-food-ii_kkbgag.png"/>
              </a>
              <a href="#">
                <img src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601078013/kusco_gallery/finger-food-iii_llvriy.png"/>
              </a>
            </div>
          </div>
          <div className="estimate py-3">
            <h1>Islas</h1>
            <div className="box-pics">
              <a href="#">
                <img src="https://res.cloudinary.com/dh3kskapq/image/upload/v1601078013/kusco_gallery/island_mhq3bi.png"/>
              </a>
            </div>
          </div>
        </section>
      </section>
    )
}
