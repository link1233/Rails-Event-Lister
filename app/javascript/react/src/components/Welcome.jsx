import React from "react";
import ReactDOM from "react-dom";
import QuestionList from "./QuestionList";

const Welcome = () => {
  return (
    <div className="container">
      <h1>Welcome to Event Lister</h1>
      <p className="lead">This is the first post</p>
      <QuestionList />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Welcome />, document.getElementById("welcome"));
});

export default Welcome;
