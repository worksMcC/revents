import { Grid } from "semantic-ui-react";
import EventsList from "./EventsList";

import { useAppSelector } from "../../../app/store/store";



export default function EventDashboard() {
  const {events} = useAppSelector(state => state.events)
  
 
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsList events={events}/>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
