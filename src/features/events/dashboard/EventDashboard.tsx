import { Grid } from "semantic-ui-react";
import EventsList from "./EventsList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { useEffect, useState } from "react";
import { AppEvent } from "../../../app/layouts/types/events";

type Props ={
  formOpen: boolean;
  setFormOpen : (value:boolean) => void;
}

export default function EventDashboard({formOpen,setFormOpen}:Props) {

  const [events, setEvents] = useState<AppEvent[]>([])

  useEffect(()=>{
    setEvents(sampleData)
  },[])

  return (
    <Grid>
      <Grid.Column width={10}>
       <EventsList  events={events}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && 
        <EventForm  setFormOpen ={setFormOpen}/>}
      </Grid.Column>

    </Grid>
  )
}
