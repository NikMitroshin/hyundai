import { createSlice } from '@reduxjs/toolkit'

import { GitHubEventItem } from 'features/eventsGH/types'
import patchStateReducer from 'helpers/patchStateReducer'

export interface EventsState {
  isInitEventsReady: boolean
  eventsList: GitHubEventItem[]
}

const initialState: EventsState = {
  isInitEventsReady: false,
  eventsList: [],
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
