import * as React from "react";
import * as ReactDOM from "react-dom";
import '../CSS_Files/style.css';

class EventDetail extends React.Component {
  // set up event detail//
  constructor(props) {
    super(props);
    this.state = { likeCount: 0 };
    this.updateLikeCount = this.updateLikeCount.bind(this);
  }
// update like count//
  updateLikeCount = () => {
    this.setState({ likeCount: this.state.likeCount + 1 });
  };

  // render event detail//
  render() {
    return (
      <div className="card rounded-0 mt-3">
        <div className="card-body">
          <div className="card-img-continer">
          <img
            className="card-img"
            src="https://source.unsplash.com/random/240x320/?gallery"
            alt="Card image cap"
          />
          </div>
          <div className="card-text">
            <h3 className="card-title">{this.props.event.title}</h3>
            <p className="lead">
              <span className="badge">{this.props.event.tag}</span>
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

export default EventDetail;
