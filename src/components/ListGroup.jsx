import React, { useContext } from "react";
import ListItem from "./ListItem";
import FeedbackContext from "../context/FeedbackContext";

const ListGroup = () => {
  const { feedbacks } = useContext(FeedbackContext);

  if (feedbacks.length === 0) {
    return (
      <h1 className="text-center my-2 display-5 text-secondary">
        No Feedbacks Yet
      </h1>
    );
  }

  return (
    <ul className="list-group my-3">
      {feedbacks.map((feedback) => (
        <ListItem key={feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
};

export default ListGroup;
