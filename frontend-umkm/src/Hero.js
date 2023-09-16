import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/app.css"; // File CSS untuk styling (opsional)
import gambarHero from "./image/1.png";

const Hero = () => {
  return (
    <Container className="hero-container">
      <Row className="align-items-center">
        <Col md={6} sm={12}>
          <div className="h-100">
            <h1>Layanan Service Untuk Anda</h1>
            <p>
              Dengan layanan servis komputer yang handal, perangkat komputer Anda akan selalu berfungsi optimal,
              memungkinkan Anda menjalankan tugas-tugas penting tanpa gangguan. Anda dapat mengandalkan para profesional
              servis komputer untuk menjaga kesehatan dan kinerja perangkat Anda.
            </p>
          </div>
          <a href="#section-two" className="btn btn-outline-primary">Lihat selengkapnya</a>
        </Col>
        <Col md={6} sm={12}>
          <div className="image mx-auto">
            <Image src={gambarHero} alt="Hero Image"/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
