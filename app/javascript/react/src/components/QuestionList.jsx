import React from "react";
import ReactDOM from "react-dom";
import QuestionDetail from "./QuestionDetail";
import '../CSS_Files/style.css';

const QuestionList = () => {
  const questionsList = [
    {
      id: 1,
      title: <a href="#Event A">Event A</a>,
      tag: "event",
    },
    {
      id: 2,
      title: <a href="#Event B">Event B</a>,
      tag: "event",
    },
    {
      id: 3,
      title: <a href="#Event C">Event C</a>,
      tag: "event",
    },
    {
      id: 4,
      title: <a href="#Event D">Event D</a>,
      tag: "event",
    },
    {
      id: 5,
      title: <a href="#Event E">Event E</a>,
      tag: "event",
    },
    {
      id: 6,
      title: <a href="#Event F">Event F</a>,
      tag: "event",
    },
    {
      id: 7,
      title: <a href="#Event G">Event G</a>,
      tag: "event",
    },
  ];

  return (
    <div className="row">
      <div className="col-lg-12 md-6 sm-4 mx-auto">
        {questionsList.map((question) => (
          <QuestionDetail question={question} key={question.id} />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
