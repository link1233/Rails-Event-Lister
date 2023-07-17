import React from "react";
import ReactDOM from "react-dom";
import QuestionDetail from "./QuestionDetail";

const QuestionList = () => {
  const questionsList = [
    {
      id: 1,
      title: "How do I create a new event?",
      tag: "event",
    },
    {
      id: 2,
      title: "How do I delete an event?",
      tag: "event",
    },
    {
      id: 3,
      title: "How do I update an event?",
      tag: "event",
    },
    {
      id: 4,
      title: "How do I read an event?",
      tag: "event",
    },
    {
      id: 5,
      title: "How do I send an event?",
      tag: "event",
    },
  ];

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        {questionsList.map((question) => (
          <QuestionDetail question={question} key={question.id} />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
