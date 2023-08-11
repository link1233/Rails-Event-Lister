import * as React from "react";
import * as ReactDOM from "react-dom/client";
import EventList from "./EventList";
import '../CSS_Files/style.css';


// set up welcome page//
class Welcome extends React.Component {
  render () {
    return (
      <div className="container">
        <h1>Welcome to Event Lister</h1>
        <p className="lead">This is place holder text</p>
        <EventList />
      </div>
    );
  };
};

// render welcome page//
const root = ReactDOM.createRoot(document.getElementById("welcome"));
root.render(
  <Welcome />
);

export default Welcome;
