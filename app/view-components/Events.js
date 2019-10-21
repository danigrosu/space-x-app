import React, { useEffect } from 'react';
import { Column, Row } from "simple-flexbox";
import EventList from '../partial-components/space-x/EventList';
import EventDetails from '../partial-components/space-x/EventDetails';
const Events = ({match}) => {
  const event_id = match.params.event_id;
  const [events, setEvents] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.spacexdata.com/v3/history`)
      .then(res => {
        if(res.ok) {
          return res.json();
        } else {
          throw Error("Fetching Events");
        }
      })
      .then(events => {
        setEvents(events);
        setIsLoading(false);
      })
      .catch(error => setError(error))
  },[])

  useEffect(() => {
    document.title = `SpaceX Historical Events`;
  });

  if (!events && isLoading) {
    return <p>Loading Events Posts...</p>;
  } else if (error) {
    return <p>{error.message}</p>;
  }

  const event = events.find(event => {
    return event.id === Number(event_id);
  });
  return (
    // <div className="view-events">
    //   <h3>Historical Events</h3>
    // </div>
    <Row horizontal="spaced">
      <Column flexGrow={1} style={{width:'45%', padding: 5}}>
        <EventList eventData={events}/>
      </Column>
      <Column flexGrow={1} style={{width:'55%', padding: 5}}>
        <EventDetails eventData={event} />
      </Column>
    </Row>
  )
}
export default Events;