import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import AvgComponent from "./components/AvgComponent";
import ListGroup from "./components/ListGroup";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Navbar />
      <div className="container p-5">
        <Form />
        <AvgComponent />
        <ListGroup />
      </div>
    </FeedbackProvider>
  );
};

export default App;
