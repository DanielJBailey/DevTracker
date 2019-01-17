import React from "react";
import styled from "styled-components";

class Events extends React.Component {
  state = {
    interviews: []
  };

  render() {
    return (
      <EventsContainer>
        <SectionTitle>Upcoming Events</SectionTitle>
        <EventsContent>
          {this.state.interviews.length === 0 ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="suitcase"
              >
                <path
                  fill="#6E54A3"
                  d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"
                />
              </svg>
              <p className="no-events">You have no upcoming events</p>
              <p className="event-description">
                You'll see your upcoming events here as you log phone calls and
                interviews.
              </p>
            </>
          ) : null}
        </EventsContent>
      </EventsContainer>
    );
  }
}

const EventsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;

  .suitcase {
    width: 100px;
    height: 100px;
  }

  .no-events {
    font-size: 14px;
    font-weight: bold;
    margin-top: 5px;
  }

  .event-description {
    font-size: 12px;
    max-width: 300px;
    margin-top: 10px;
    text-align: center;
  }
`;

const EventsContainer = styled.div`
  padding: 1.25em;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.13);
`;

const SectionTitle = styled.h3`
  font-weight: lighter;
  font-family: "Open Sans", sans-serif;
  color: #666;
`;

export default Events;
