import { createSlice } from "@reduxjs/toolkit"
import { sampleData } from "../../app/api/sampleData"
import { AppEvent } from "../../app/types/events"

type State ={
    events: AppEvent[]
}

const initialState : State = {
    events: sampleData
}

export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers:{
        createEvent:(state,action)=>{
            state.events.push(action.payload)
        },
        upDateEvent:(state,action)=>{
            state.events[state.events.findIndex(e => e.id === action.payload.id)] = action.payload
        },
        deletEvent: (state, action) => {
            state.events = state.events.filter(e => e.id !== action.payload);
        },
    }
})



export const {createEvent, upDateEvent, deletEvent} = eventSlice.actions