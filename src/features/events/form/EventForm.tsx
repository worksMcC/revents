import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { createEvent, upDateEvent } from "../eventSlice";
import { createId } from "@paralleldrive/cuid2";
import { Field, FieldValues, useForm } from "react-hook-form";

export default function EventForm() {
    const {register, handleSubmit, formState:{errors}} = useForm()
     let {id} = useParams()
    const event = useAppSelector(state =>state.events.events.find(e => e.id === id))
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
 
    

    function onSubmit(data: FieldValues){
        console.log(data)
        // id = id ?? createId()
        // event ? 
        // dispatch(upDateEvent({...event,...values})):
        // dispatch(createEvent({...values, id, hostedBy:'bob',attendees:[], hostPhotoURL:''}))
        // navigate(`/events/${id}`)
    }

    
 
    return (
        <Segment clearing>
            <Header content={event ? "updateEvent":"Create Event"} />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input
                        placeholder="Event title"
                        defaultValue= {event?.title || ''}
                        {...register('title',{required: 'This feild is required' })}
                        error={errors.title && errors.title.message}
                    />
              
                <Form.Input                       
                        placeholder="Catogory"
                        defaultValue= {event?.category || ''}
                        {...register('category')}
                         />
                
                <Form.Input
                        placeholder="Description" 
                        defaultValue= {event?.description || ''}
                        {...register('description')}
                     />
              
                <Form.Input                 
                        placeholder="City"
                        defaultValue= {event?.city || ''}
                        {...register('city')}
                />
            
                <Form.Input
                        placeholder="Venue"
                        defaultValue= {event?.venue || ''}
                        {...register('venue')}
                  />
      
                <Form.Input
                        type='date'                
                        placeholder="Date"
                        defaultValue= {event?.date || ''}
                        {...register('date')}
                        />
            
                <Button
                    type="submit"
                    floated="right"
                    positive content="Submit" />
                <Button
                    as={Link} to='/events'
                    type="submit"
                    floated="right"
                    content="Cancel"

                />
            </Form>
        </Segment>
    );
}
