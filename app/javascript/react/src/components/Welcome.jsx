import React from "react";
import ReactDOM from "react-dom/client";
import QuestionList from "./QuestionList";
import "./style.scss";

const Welcome = () => {
  return (
    <div className="container">
      <h1>Welcome to Event Lister</h1>
      <p className="lead">This is the first post</p>
      <QuestionList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("welcome"));
root.render(
  // <React.StrictMode>
<Welcome />
   /* </React.StrictMode> */
);

export default Welcome;
