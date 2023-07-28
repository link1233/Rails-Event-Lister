import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const QuestionDetail = (props) => {
  const [likeCount, setLikeCount] = React.useState(0);

  return (
    <div className="card rounded-0 mt-3">
      <div className="card-body">
        <img
          className="card-img"
          src="https://source.unsplash.com/random/240x320/?gallery"
          alt="Card image cap"
        />
        <div className="card-text">
          <h3 className="card-title">{props.question.title}</h3>
          <p className="lead">
            <span className="badge">{props.question.tag}</span>
          </p>
          <button
            className="btn my-1"
            onClick={() => setLikeCount(likeCount + 1)}
          >
            Like
          </button>
          {likeCount > 0 ? (
            <span className="badge">{likeCount}</span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
