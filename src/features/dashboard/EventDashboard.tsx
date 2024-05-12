import { Grid } from "semantic-ui-react";
import EventsList from "./EventsList";

export default function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
       <EventsList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>right</h2>
      </Grid.Column>

    </Grid>
  )
}
