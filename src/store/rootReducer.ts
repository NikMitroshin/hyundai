import { Reducer } from '@reduxjs/toolkit'
import { persistCombineReducers } from 'redux-persist'
import { PersistConfig } from 'redux-persist/es/types'

import eventsSlice, { EventsState } from 'features/events/store'
import testSlice, { TestState } from 'store/slices/testSlice'
import mmkvStorage from 'store/storages/mmkvStorage'

interface Store {
  test: TestState
  events: EventsState
}

const persistConfig: PersistConfig<Store> = {
  key: 'root',
  storage: mmkvStorage,
  whitelist: [],
  version: 4,
  blacklist: [],
}

const persistedCombinedReducer = persistCombineReducers(persistConfig, {
  test: testSlice,
  events: eventsSlice,
})

export const rootReducer: Reducer = (state: RootState, action) => persistedCombinedReducer(state, action)

export type RootState = ReturnType<typeof persistedCombinedReducer>
