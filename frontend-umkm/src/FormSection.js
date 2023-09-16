import React, {useState} from 'react';
import TestimonialSection from './TestimonialSection';
import TestimonialForm from './TestimonialForm';
import {Row, Col} from 'react-bootstrap';
const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleFormSubmit = () => {
    setRefresh(prevRefresh => !prevRefresh);
  };

  return (
    <div className="container form-section">
      <TestimonialSection refresh={refresh}/>
      <Row>
        <Col md={8} className="mx-auto">
          <h3>Submit Testimonial</h3>
          <TestimonialForm onFormSubmit={handleFormSubmit}/>
        </Col>
      </Row>
    </div>
  );
};

export default App;
