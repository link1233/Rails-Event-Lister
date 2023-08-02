import React from "react";
import ReactDOM from "react-dom";
import '../CSS_Files/style.css';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likeCount: 0 };
    this.updateLikeCount = this.updateLikeCount.bind(this);
  }

  updateLikeCount = () => {
    this.setState({ likeCount: this.state.likeCount + 1 });
  };

  render() {
    return (
      <div className="card rounded-0 mt-3">
        <div className="card-body">
          <img
            className="card-img"
            src="https://source.unsplash.com/random/240x320/?gallery"
            alt="Card image cap"
          />
          <div className="card-text">
            <h3 className="card-title">{this.props.question.title}</h3>
            <p className="lead">
              <span className="badge">{this.props.question.tag}</span>
            </p>
            <button
              className="btn my-1"
              onClick={this.updateLikeCount}
            >
              Like
            </button>
            {this.state.likeCount > 0 ? (
              <span className="badge">{this.state.likeCount}</span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
};

// const QuestionDetail = (props) => {
//   const [likeCount, setLikeCount] = React.useState(0);

//   return (
//     <div className="card rounded-0 mt-3">
//       <div className="card-body">
//         <img
//           className="card-img"
//           src="https://source.unsplash.com/random/240x320/?gallery"
//           alt="Card image cap"
//         />
//         <div className="card-text">
//           <h3 className="card-title">{props.question.title}</h3>
//           <p className="lead">
//             <span className="badge">{props.question.tag}</span>
//           </p>
//           <button
//             className="btn my-1"
//             onClick={() => setLikeCount(likeCount + 1)}
//           >
//             Like
//           </button>
//           {likeCount > 0 ? (
//             <span className="badge">{likeCount}</span>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

export default QuestionDetail;
