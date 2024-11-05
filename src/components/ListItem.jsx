import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const ListItem = ({ feedback }) => {
  const { removeFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <li className="list-group-item rounded-0">
      <h1>Rating : {feedback.rating}</h1>
      <p>Review : {feedback.review}</p>
      <span className="float-end">
        <button
          className="btn btn-warning btn-sm mx-1"
          onClick={() => editFeedback(feedback)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => removeFeedback(feedback.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
