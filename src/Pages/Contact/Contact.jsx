import React, { useRef } from "react";
import {
  Container,
  Button,
  Col,
  Row,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import BottomTitle from "../../Components/BottomTitle/BottomTitle";

const service = import.meta.env.VITE_SERVICE_ID;
const template = import.meta.env.VITE_TEMPLATE_ID;
const public_key = import.meta.env.VITE_PUBLIC_ID;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // prevents page refresh
    e.preventDefault();

    // sends email
    emailjs.sendForm(service, template, form.current, public_key).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // resets input
    e.target.reset();
  };

  return (
    <Container className="Contact">
      <Form Form ref={form} onSubmit={sendEmail}>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6}>
            <Form.Label>First Name / Nombre:</Form.Label>
            <Form.Control required type="text" name="first" />
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <Form.Label>Last Name / Apellido:</Form.Label>
            <Form.Control required type="text" name="last" />
          </Col>
        </Row>
        <Form.Label>Email / Correo Electrónico:</Form.Label>
        <Form.Control required type="email" name="email" />

        <Form.Label>Message / Mensaje:</Form.Label>
        <Form.Control
          required
          as="textarea"
          style={{ height: "200px" }}
          name="message"
        />
        <Form.Text id="emailJS-mention" muted>
          Powered by EmailJS
        </Form.Text>
        <div className="form-button">
          <Button className="buttonCustom" variant="" type="submit">
            Submit
          </Button>
        </div>
        <BottomTitle title="Contact" />
        {/* <div className="bottomTitle">Contact</div> */}
      </Form>
    </Container>
  );
};

export default Contact;
