import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";

const Form = () => {
  const { addReview, edit, updateFeedback } = useContext(FeedbackContext);

  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    edit.isEdit
      ? updateFeedback({
          id: edit.feedback.id,
          rating: +rating,
          review: review,
        })
      : addReview(rating, review);
    setRating(1);
    setReview("");
  };

  useEffect(() => {
    setRating(edit.feedback.rating);
    setReview(edit.feedback.review);
  }, [edit]);

  return (
    <div className="card my-3 p-3 rounded-0">
      <form onSubmit={handleSubmit}>
        <h1 className="my-3 text-center">Give Your Valuable Feedback</h1>
        <select
          className="form-select my-3 rounded-0"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          className="form-control my-3 rounded-0"
          placeholder="Enter Review Here..."
          onChange={(e) => setReview(e.target.value)}
          value={review}
          required
        ></textarea>
        <button className="btn btn-success rounded-0 w-100">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Form;
