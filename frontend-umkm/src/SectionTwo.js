import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ImageSlider from './ImageSlider';

const SectionTwo = () => {
  return (
    <Container id="section-two" className="section-two">
      <Row className="align-items-center">
        <Col md={6}>
          <ImageSlider/>
        </Col>
        <Col md={6}>
          <div className="description">
            <h2>Servis Handal</h2>
            <p>
              Layanan servis komputer tidak hanya memberikan perbaikan saat terjadi masalah, tetapi juga membantu dalam
              meningkatkan kinerja dan umur panjang perangkat komputer Anda melalui pemeliharaan berkala. Ini termasuk
              membersihkan debu yang dapat mengganggu sirkulasi udara, mengganti komponen yang rusak, serta menginstal
              dan memperbarui perangkat lunak untuk menjaga keamanan dan kestabilan sistem.
            </p>
            <p>
              Dengan layanan servis komputer yang handal, Anda dapat yakin bahwa perangkat komputer Anda akan selalu
              berfungsi dengan optimal, sehingga Anda dapat terus menjalankan tugas-tugas penting Anda tanpa gangguan.
              Jadi, jangan ragu untuk mengandalkan para profesional servis komputer untuk menjaga kesehatan dan kinerja
              komputer Anda.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionTwo;
