import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/testimonials";

    axios
      .get(apiUrl)
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
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
              <Card key="card-{index}" className="text-center mx-3">
                <Card.Body key="body-{index}">
                  <Card.Title className="card-title" key="title-{index}">
                    {testimonial.name}
                  </Card.Title>
                  <Card.Text className="card-text" key="text-{index}">
                    {testimonial.testimony}
                  </Card.Text>
                  <div className="stars" key="stars-{index}">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar />
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
