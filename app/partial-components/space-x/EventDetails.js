import React from "react";
import PropTypes from 'prop-types';
import './EventDetails.scss';
const EventDetails = (props) => {
  const event = props.eventData;
  return (event
    ? <>
      <h3>{event.title}</h3>
    </>
    : <h3>.. select and event!</h3>
  );
};
export default EventDetails;
EventDetails.propTypes = {
  eventData: PropTypes.object
};