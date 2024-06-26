import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup, } from "semantic-ui-react";
import EventsListAttendee from "./EventsListAttendee";
import { AppEvent } from "../../../app/types/events";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/store/store";
import { deletEvent } from "../eventSlice";

type Props ={
    event:AppEvent
 
}



export default function EventListItem({event}:Props) {
    const dispatch = useAppDispatch();
  return (
    <SegmentGroup>
        <Segment>
            <ItemGroup>
                <Item>
                    <Item.Image size="tiny" circular src={event.hostPhotoURL || '/user.png'} />
                    <Item.Content>
                        <Item.Header>{event.title}</Item.Header>
                        <Item.Description>
                            hosted by {event.hostedBy}
                        </Item.Description>
                    </Item.Content>
                </Item>
            </ItemGroup>
        </Segment>
        <Segment>
            <span>
                <Icon name="clock"/>{event.date}
                <Icon name="marker"/>{event.venue}
            </span>
        </Segment>
        <Segment secondary>
            <List horizontal>
               {event.attendees.map((attendee: any)=>(
                <EventsListAttendee key={attendee.id} attendee= {attendee}/>
               ))}
            </List>
        </Segment>
        <Segment clearing>
            <span>{event.description}</span>
            <Button onClick={() => dispatch(deletEvent(event.id))} color="red" floated="right"content='delete' />
            <Button as={Link} to={`/events/${event.id}`}color="teal" floated="right"content='veiw'  />
        </Segment>
    </SegmentGroup>
  )
}
