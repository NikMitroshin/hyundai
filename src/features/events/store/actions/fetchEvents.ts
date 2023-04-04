import { createAsyncThunk } from '@reduxjs/toolkit'

import { patchState } from 'features/events/store/index'

export const fetchEvents = createAsyncThunk('events/fetchEvents', async (_, thunkApi) => {
  const { dispatch } = thunkApi
  // TODO request
  console.log(12323423)

  dispatch(patchState({ isInitEventsReady: true }))
})
