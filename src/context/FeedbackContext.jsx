import { createContext, useReducer, useState } from "react";
import { FeedbackReducer } from "./FeedbackReducer";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // Initial State

  const initialState = {
    feedbacks: [{ review: "I am From Reducer", rating: 5, id: 1 }],
    edit: { feedback: {}, isEdit: false },
  };

  const [state, dispatch] = useReducer(FeedbackReducer, initialState);

  // Add Review
  const addReview = (rating, review) => {
    dispatch({
      type: "ADD_FEEDBACK",
      payload: {
        id: crypto.randomUUID(),
        review,
        rating: parseInt(rating),
      },
    });
  };

  // Remove Feedback
  const removeFeedback = (id) => {
    dispatch({
      type: "DELETE_FEEDBACK",
      payload: id,
    });
  };

  // Edit Feedback
  const editFeedback = (feedback) => {
    dispatch({
      type: "EDIT_FEEDBACK",
      payload: feedback,
    });
  };

  // Update Feedback
  const updateFeedback = (updatedFeedback) => {
    dispatch({
      type: "UPDATE_FEEDBACK",
      payload: updatedFeedback,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks: state.feedbacks,
        edit: state.edit,
        addReview,
        removeFeedback,
        updateFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
