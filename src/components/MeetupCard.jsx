import React from "react";
import "./MeetupCard.css";

function MeetupCard({ event }) {
  return (
    <div className="meetup-card">
      <img src={event.image} alt={event.name} />
      <h2>{event.name}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
      <a href={event.link} target="_blank" rel="noopener noreferrer">
        View Details
      </a>
    </div>
  );
}

export default MeetupCard;

