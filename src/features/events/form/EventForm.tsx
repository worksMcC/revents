import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { createEvent, upDateEvent } from "../eventSlice";
import { createId } from "@paralleldrive/cuid2";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { categoryOptions } from "./catogoryOptions";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";


export default function EventForm() {
    const { register, handleSubmit, control, setValue, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: "onTouched"
    })
    let { id } = useParams()
    const event = useAppSelector(state => state.events.events.find(e => e.id === id))
    const dispatch = useAppDispatch()
    const navigate = useNavigate()




    function onSubmit(data: FieldValues) {
        console.log(data)
        id = id ?? createId()
        event ? 
        dispatch(upDateEvent({...event,...data, date: data.date.toString()})):
        dispatch(createEvent({...data, id, hostedBy:'bob',attendees:[], hostPhotoURL:'', date: data.date.toString()}))
        navigate(`/events/${id}`)
    }



    return (
        <Segment clearing>

            <Header content="Event details" sub color="teal" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input
                    placeholder="Event title"
                    defaultValue={event?.title || ''}
                    {...register('title', { required: 'This feild is required' })}
                    error={errors.title && errors.title.message}
                />
                <Controller
                name='category'
                control={control}
                rules={{required:'This feild is required'}}
                defaultValue={event?.category}
                render={({ field })=>(
                    <Form.Select
                    options={categoryOptions}
                    placeholder="Category"
                    clearable
                    {...field}
                    onChange={(_,d)=>setValue('category', d.value, {shouldValidate:true})}
                    error={errors.category && errors.category.message}
                />
                )}/>

               

                <Form.TextArea

                    placeholder="Description"
                    defaultValue={event?.description || ''}
                    {...register('description', { required: 'This feild is required' })}
                    error={errors.description && errors.description.message}
                />
                <Header content="locaton deatails" sub color="teal" />
                <Form.Input
                    placeholder="City"
                    defaultValue={event?.city || ''}
                    {...register('city', { required: 'This feild is required' })}
                    error={errors.city && errors.city.message}
                />
                <Form.Input
                    placeholder="Venue"
                    defaultValue={event?.venue || ''}
                    {...register('venue', { required: 'This feild is required' })}
                    error={errors.venue && errors.venue.message}
                />
                <Form.Field>
                    <Controller 
                    name ='date'
                    control={control}
                    rules={{required: 'date'}}
                    defaultValue={event && new Date(event.date) || null }
                    render={({ field })=>(
                        <DatePicker 
                            selected={ field.value}
                            onChange={value => setValue('date',value,{shouldValidate: true})}
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='dd MMM, yyyy h:mm aa' />
                    )}
                     />
                </Form.Field>
                <Button
                    disabled={!isValid}
                    loading={isSubmitting}
                    type="submit"
                    floated="right"
                    positive content="Submit" />
                <Button
                    disabled={isSubmitting}
                    as={Link} to='/events'
                    type="submit"
                    floated="right"
                    content="Cancel"

                />
            </Form>
        </Segment>
    );
}
