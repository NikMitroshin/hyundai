import { createSlice } from '@reduxjs/toolkit'

import patchStateReducer from 'helpers/patchStateReducer'

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
    patchState: patchStateReducer,
    resetEventsState: () => initialState,
  },
})

export const { resetEventsState, patchState } = eventsSlice.actions

export default eventsSlice.reducer
