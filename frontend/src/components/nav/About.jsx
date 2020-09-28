import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from "react-bootstrap";
import "../../styles/About.css";

export default function About() {
  const styleAccordion = {
    borderRadius: "2px",
    background: "#000",
    border: "15px double #fff",
  };

  return (
    <section className="background-about">
      <div className="container-about">
        {/* TITLE */}
        <section className="bg-light text-center w-100">
            <div className="p-3 mb-2">
              <h1>¿Quiénes somos?</h1>
            </div>
        </section>

        {/* ACCORDION */}
        <section className="container">
          <Accordion className="py-5">
            <div className="row">
              <div className="col-md py-2 ml-6">
                <Card style={styleAccordion}>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      className="nav-link text-white m-auto"
                      variant="link"
                      eventKey="0"
                    >
                      <h2 className="title-accordion mb-0">
                        ¿Qué es Kusco Cocina?
                      </h2>
                    </Accordion.Toggle>
                  </Card.Header>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Card.Text className="text-justify text-white">
                        Kusco Cocina es un servicio de catering que empezó desde
                        hace años, en la mente de una niña llamada:
                        <br />
                        María Guadalupe Romao, donde cada día soñaba con ser
                        alguien en la gastronomía, el nombre de este proyecto
                        llegó en base a una acción de puro amor, donde esta,
                        pedía con muchas ansias una película que estaba en VHS,
                        que por esos tiempo, era la única forma de ver peículas,
                        aparte de las entradas de cine.
                        <br />
                        Un día, el padre de esta chica, le regaló una película
                        en VHS que por esos tiempos, era un momento de economía
                        difícil, y costaba mucho poder comprarla, la película
                        que tanto pedía era llamada "Las Locuras del Emperador",
                        y el anfitrión de la misma, se llama Kuzco, de ahí, el
                        nombre de todo esto. Este proyecto se fue construyendo
                        con sueños, alimentándose día tras día con aprendizaje
                        de institutos y de manuales. Sin pensar, que todos sus
                        esfuerzos, todos su sueños, de a poco se fueron haciendo
                        realidad, gracias a la ayuda de su familia, y de su
                        compañero más fiel, Manuel Darío Garavello, que es su
                        mano derecha y socio de este emprendimiento.
                        <br />
                        Somos un equipo, somos KUSCO COCINA.
                      </Card.Text>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>

              <div className="col-md py-2 ml-6">
                <Card style={styleAccordion}>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      className="nav-link text-white m-auto"
                      variant="link"
                      eventKey="1"
                    >
                      <h2 className="title-accordion mb-0 text-center">
                        ¿Qué hace a Kusco Cocina destacarse?
                      </h2>
                    </Accordion.Toggle>
                  </Card.Header>

                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Card.Text className="text-justify text-white">
                        Lo simple, lo que se fue perdiendo año tras año, que es
                        hacer las comidas con sabor y cocinar todo en el
                        momento, volviendo a lo casero, a lo fresco, a lo que
                        nos recuerda a nuestras raíces, donde lo profesional y
                        lo hogareño se combinan para dar una esencia
                        inigualable. Somos lo que día tras día hacemos crecer, y
                        nos esforzamos para que todo funcione correctamente.
                        <br />
                        Nosotros implementamos el estilo Finger Food, y Mesa
                        Buffet, donde descontracturamos la anatomía de los
                        catering típicos de gente sentadas en lugares por
                        defecto, nuestros servicios ofrecen libertad y comodidad
                        a la hora de servir la comida, donde cada uno puede
                        agarrar la cantidad deseada y poder repetir a su antojo
                        las delicias que nosotros ofrecemos.
                      </Card.Text>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            </div>

            <Button className="my-5 p-2" style={styleAccordion} size="lg" block>
              <Link to="/gallery/images" className="nav-link text-white">
                <h2 className="title-accordion">Galería de imágenes</h2>
              </Link>
            </Button>

            <Card style={styleAccordion}>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  className="nav-link text-white text-center m-auto"
                  variant="link"
                  eventKey="3"
                >
                  <h2 className="title-accordion mb-0">
                    ¿Una frase que los represente?
                  </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Card.Text className="text-white">
                    Nuestra frase es:
                    <br />
                    "Una vez que probas nuestras comidas, VOLVES A REPETIR".
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </section>
      </div>
    </section>
  );
}
