import { createSlice } from '@reduxjs/toolkit'

export interface EventsState {
  isInitEventsReady: boolean
}

const initialState: EventsState = {
  isInitEventsReady: false,
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    resetEventsState: () => initialState,
  },
})

export const { resetEventsState } = eventsSlice.actions

export default eventsSlice.reducer
