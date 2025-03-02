import React from "react";
import MeetupCard from "./MeetupCard";
import "./MeetupList.css";

function MeetupList({ events }) {
  return (
    <div className="meetup-list">
      {events.map((event) => (
        <MeetupCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default MeetupList;

