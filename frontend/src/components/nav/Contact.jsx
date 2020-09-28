import React, { useState } from "react";
import { Form, Button, Card, Col } from "react-bootstrap";
import axios from "axios";
import '../../styles/Contact.css';

export default function Contact() {
  //UseStates
  

  const inputStyle = {
    background: "none",
    borderBottom: '2px solid #fff',
    color: '#fff',
  }

  const formStyle = {
    fontSize: '16px',
    textAlign: 'center'
  }

  const [status, setStatus] = useState({
    alertAppear: false,
  });
  const [email, setEmail] = useState({
    name: "",
    phone: "",
    mail: "",
    message: "",
    statusEmail: "",
  });
  const [validated, setValidated] = useState(false);

  //FUNCTIONS
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    axios("/contact/mail", {
      method: "POST",
      data: email,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setEmail({ statusEmail: true }), resetForm();
      })
      .catch((err) => {
        console.error(err),
          setEmail({
            statusEmail: false,
            alertAppear: true,
          });
      });
  };

  const resetForm = () => {
    setTimeout(() => {
      setStatus({ alertAppear: false });
    }, 3000);
  };

  const handleChange = (input) => (e) => {
    setEmail({
      ...email,
      [input]: e.target.value,
    });
  };

  const { name, phone, mail, message } = useState();
  return (
    <section className="background-form" id="form">
      <div className="row">
        <div className="form-content text-white p-4">
          <div className="container">
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={formStyle}>
              <Form.Group>
                <div className="title-form">
                  <canvas
                    className="line-canvas"
                    height="5"
                    style={{ backgroundColor: "#fff" }}
                  />
                  <h4 className="title-info py-2" style={{ color: '#fff' }}>Contactanos</h4>
                  <canvas
                    className="line-canvas"
                    height="5"
                    style={{ backgroundColor: "#fff" }}
                  />
                </div>
                <div className={status.alertAppear ? "text-center" : "d-none"}>
                  <h4
                    className={
                      email.statusEmail
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                  >
                    {email.statusEmail ? "Mensaje enviado" : "Hubo un error"}
                  </h4>
                </div>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} md="6">
                  <Form.Label>Nombre: *</Form.Label>
                  <Form.Control
                    type="text"
                    style={inputStyle}
                    placeholder="Escriba su nombre aqui"
                    name="name"
                    maxLength="35"
                    value={name}
                    onChange={handleChange("name")}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Escriba su nombre.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group as={Col} md="6">
                  <Form.Label>Apellido: *</Form.Label>
                  <Form.Control
                    type="text"
                    style={inputStyle}
                    placeholder="Escriba su apellido aqui"
                    name="name"
                    maxLength="35"
                    value={name}
                    onChange={handleChange("name")}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Escriba su apellido.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} md="6" >
                <Form.Label>Telefono: (Opcional)</Form.Label>
                <Form.Control
                  type="text"
                  style={inputStyle}
                  name="phone"
                  placeholder="Agregue un teléfono"
                  maxLength="15"
                  value={phone}
                  onChange={handleChange("phone")}
                />
              </Form.Group>


              <Form.Group as={Col} md="6">
                <Form.Label>Correo Electronico: *</Form.Label>
                <Form.Control
                  type="email"
                  style={inputStyle}
                  placeholder="example@mail.com"
                  name="mail"
                  maxLength="30"
                  value={mail}
                  onChange={handleChange("mail")}
                  required
                />
                <Form.Control.Feedback type="invalid">
                    Escriba un correo.
                  </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  En la semana responderemos su consulta al correo.
                </Form.Text>
              </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>Comentanos tu consulta: *</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ background: "none" }}
                  rows="6"
                  name="message"
                  placeholder="Escribe aqui"
                  maxLength="100"
                  value={message}
                  onChange={handleChange("message")}
                  id="textarea"
                  required
                />
              <Form.Control.Feedback type="invalid">
                    Escriba su consulta.
                  </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" className="my-5 btn-block">
                Enviar
              </Button>
            </Form>
          </div>
        </div>

        <div className="form-content text-center p-4">
          <section className="contact-info">
            <canvas
              className="line-canvas"
              height="5"
              style={{ backgroundColor: "#000" }}
            />
            <h4 className="title-info py-2" style={{ color: '#000' }}>
              Informacion de contacto
            </h4>
            <canvas
              className="line-canvas"
              height="5"
              style={{ backgroundColor: "#000" }}
            />
            <div className="info-items">
              <i className="fas fa-map-marker-alt">
                <p>
                  Buenos Aires, General Rodriguez 1748, Comandante Giordano (Ex
                  Tilcara)
                </p>
              </i>
              <div className="row-icons">
                <i className="fab fa-whatsapp">
                  <p> 11-38844002</p>
                </i>
                <i className="fab fa-facebook-square">
                  <p>Catering Kusco Cocina </p>
                </i>
              </div>
              <i className="fab fa-instagram"></i>
              <p>/cateringkuscococina</p>
            </div>
            <div className="info">
              <h4>Nota:</h4>
              <Form.Text id="text">
                Podes contactarnos y pedir presupuestos diferentes a los que
                tenemos preestablecidos en la página, el mensaje le llegará a su
                correo electrónico con un archivo PDF para que lo puedas
                inprimir.
              </Form.Text>
              <div className="note">
                <p>* Campos Obligatorios</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
