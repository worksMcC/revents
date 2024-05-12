import { Grid } from "semantic-ui-react";
import EventsList from "./EventsList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { useEffect, useState } from "react";
import { AppEvent } from "../../../app/layouts/types/events";

type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
  selectEvent: (event: AppEvent)=>void;
  selectedEvent : AppEvent | null;
};

export default function EventDashboard({ formOpen, setFormOpen, selectEvent, selectedEvent }: Props) {
  const [events, setEvents] = useState<AppEvent[]>([]);
  
  useEffect(() => {
    setEvents(sampleData);
  }, []);

  function addEvent(event: AppEvent) {
    setEvents((prevState) => {
      return [...prevState, event];
    });
  }


  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsList events={events} selectEvent={selectEvent}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm 
          setFormOpen={setFormOpen} 
          addEvent={addEvent} 
          selectedEvent={selectedEvent}
          key ={selectedEvent ? selectedEvent.id : 'create'} />
        )}
      </Grid.Column>
    </Grid>
  );
}
