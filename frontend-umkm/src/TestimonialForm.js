import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const TestimonialForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [testimony, setTestimony] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = {
      name,
      testimony,
      rating,
    };

    const apiUrl = "http://localhost:8000/api/testimonials";
    axios
      .post(apiUrl, newTestimonial)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Terima Kasih!",
          text: "Testimoni Anda telah berhasil disubmit.",
        }).then(() => {
          onFormSubmit();
          setName("");
          setTestimony("");
          setRating(5);
          window.location.reload();
        });
      })
      .catch((error) => {
        console.error("Error submitting testimonial:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="testimony" className="form-label">
          Testimony
        </label>
        <textarea
          className="form-control"
          id="testimony"
          rows="3"
          value={testimony}
          onChange={(e) => setTestimony(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">
          Rating
        </label>
        <select
          className="form-select"
          id="rating"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          required
        >
          <option value={5}>5 Bintang</option>
          <option value={4}>4 Bintang</option>
          <option value={3}>3 Bintang</option>
          <option value={2}>2 Bintang</option>
          <option value={1}>1 Bintang</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default TestimonialForm;
