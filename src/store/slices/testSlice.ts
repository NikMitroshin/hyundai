import { createSlice } from '@reduxjs/toolkit'

export interface TestState {
  test: string
}

const initialState: TestState = {
  test: 'test123',
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest: (state, action: { payload: string }) => {
      state.test = action.payload
    },

    resetTestState: () => initialState,
  },
})

export const { setTest, resetTestState } = testSlice.actions

export default testSlice.reducer
