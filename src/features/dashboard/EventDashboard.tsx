import { Grid } from "semantic-ui-react";

export default function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <h2>left</h2>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>right</h2>
      </Grid.Column>

    </Grid>
  )
}
