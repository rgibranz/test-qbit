import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FaRocket, FaTools, FaCommentDots} from 'react-icons/fa';
import './assets/app.css';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Perbaikan Cepat dan Efisien',
      description:
        'Layanan servis komputer berpengalaman dapat dengan cepat mengidentifikasi dan memperbaiki masalah perangkat keras atau perangkat lunak yang mungkin terjadi. Ini mengurangi waktu down-time komputer Anda, memungkinkan Anda untuk kembali bekerja atau bermain dengan lebih cepat.',
      icon: <FaRocket/>
    },
    {
      title: 'Pemeliharaan Preventif',
      description:
        'Selain perbaikan saat terjadi masalah, layanan servis komputer juga dapat memberikan pemeliharaan preventif. Ini termasuk membersihkan debu, mengganti komponen yang sudah usang, serta memastikan bahwa perangkat lunak Anda selalu diperbarui dan aman dari ancaman keamanan. Hal ini dapat memperpanjang umur perangkat Anda dan mencegah masalah yang lebih besar di masa depan.',
      icon: <FaTools/>
    },
    {
      title: 'Konsultasi dan Rekomendasi',
      description:
        'Para profesional servis komputer juga dapat memberikan saran dan rekomendasi terkait perangkat keras atau perangkat lunak yang dapat meningkatkan kinerja atau efisiensi komputer Anda. Mereka dapat membantu Anda memilih opsi terbaik sesuai dengan kebutuhan dan anggaran Anda.',
      icon: <FaCommentDots/>
    },
  ];

  return (
    <Container className="features-section">
      <Row className="align-items-center">
        <h2 className="text-center">Kelebihan Kami</h2>
        {features.map((feature, index) => (
          <Col md={4}>
            <div key={index} className="feature-item text-center">
              <div className="feature-icon mx-auto">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturesSection;
