import { AppEvent } from "../../../app/layouts/types/events";
import EventListItem from "./EventListItem";

type Props = {
  events: AppEvent[]
  selectEvent : (event: AppEvent) => void;
}

export default function EventsList({events, selectEvent}:Props) {
  return (
    <>
    {events.map(event =>(
        <EventListItem key={event.id}event={event} selectEvent={selectEvent}/>
    ))}
    
    </>
  )
}
