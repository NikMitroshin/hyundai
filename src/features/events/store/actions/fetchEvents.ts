import { createAsyncThunk } from '@reduxjs/toolkit'

import { getEventsList } from 'clients/gitHubClient'
import { patchState } from 'features/events/store/index'

export const fetchEvents = createAsyncThunk('events/fetchEvents', async (_, thunkApi) => {
  const { dispatch } = thunkApi

  try {
    const data = await getEventsList()

    dispatch(patchState({ eventsList: data }))
  } catch (e) {
    // todo handle err
  }

  dispatch(patchState({ isInitEventsReady: true }))
})
