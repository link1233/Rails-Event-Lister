import React from "react";
import ReactDOM from "react-dom/client";
import "../CSS_Files/style.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar">
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("searchbar"));
root.render(
  // <React.StrictMode>
  <SearchBar />
  /* </React.StrictMode> */
);

export default Searchbar;
