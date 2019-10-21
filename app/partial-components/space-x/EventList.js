import React, { useState} from 'react';
import PropTypes from 'prop-types';
import './EventList.scss';
const EventList = (props) => {
  const listItems = props.eventData.map(event => {
    return <li className="event-post" key={event.id + event.title}>
      <Link className='link' to={`/events/${event.id}`}>{event.title}</Link>
    </li>
  });
  return (
    <div className={`view-events`}>
      <h3>Historical Events</h3>
      <ul className="event-list">
        {listItems}
      </ul>
    </div>
  );
}
export default EventList;
EventList.propTypes = {
  eventData: PropTypes.array
};