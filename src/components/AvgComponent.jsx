import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const AvgComponent = () => {
  const { feedbacks } = useContext(FeedbackContext);

  const avgRating = feedbacks.reduce(
    (p, c) => p + c.rating / feedbacks.length,
    0
  );

  return (
    <span className="d-flex align-items-center justify-content-between">
      <p>Total Reviews : {feedbacks.length}</p>
      <p>Avg Rating : {avgRating.toFixed(2)}</p>
    </span>
  );
};

export default AvgComponent;
