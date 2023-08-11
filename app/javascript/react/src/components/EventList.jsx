import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import EventDetail from "./EventDetail";
import "../CSS_Files/style.css";

const EventList = () => {
  //use state to set events//
  const [eventsList, setEventsList] = useState([]);
  //use effect to fetch data from api//
  const eventsUrl = "http://localhost:3000/api/v1/events";

  const fetchEventList = () => {
    fetch(eventsUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEventsList(data);
      });
  };
  // set up event list//
  useEffect(() => {
    fetchEventList();
  }, []);

  // const eventsList = [
  //   {
  //     id: 1,
  //     title: "Event 1",
  //     tag: "This is event 1",
  //   },
  //   {
  //     id: 2,
  //     title: "Event 2",
  //     tag: "This is event 2",
  //   },
  //   {
  //     id: 3,
  //     title: "Event 3",
  //     tag: "This is event 3",
  //   }
  // ]

  return (
    <div className="row">
      <div className="col-lg-12 md-6 sm-4 mx-auto">
        {eventsList.map((event) => (
          <EventDetail event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
