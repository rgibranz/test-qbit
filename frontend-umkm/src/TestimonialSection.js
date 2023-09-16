import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row} from 'react-bootstrap';
import {FaStar} from 'react-icons/fa'

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Ganti dengan URL API yang sesuai atau load data dari file testimonials.json
    const apiUrl = 'https://65052ea5ef808d3c66efd160.mockapi.io/testimoni';

    axios.get(apiUrl)
      .then(response => {
        setTestimonials(response.data);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container testimonial-section">
      <Row>
        <h2 className="text-center">Kata Teman Teman</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <Card className="text-center mx-3">
                <Card.Body>
                  <Card.Title className="card-title">{testimonial.name}</Card.Title>
                  <Card.Text className="card-text">{testimonial.testimony}</Card.Text>
                  <div className="stars">
                    {Array.from({length: testimonial.rating}, (_, i) => (
                      <FaStar/>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Row>
    </div>
  );
};

export default TestimonialSection;
