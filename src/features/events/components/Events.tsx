import React, { useCallback } from 'react'

import styled from '@emotion/native'
import { useFocusEffect } from '@react-navigation/native'
import { Text } from 'react-native'

import { fetchEvents } from 'features/events/store/actions/fetchEvents'
import useAppDispatch from 'hooks/useAppDispatch'

const EventsWrapper = styled.View``
const Events: React.FC = () => {
  const dispatch = useAppDispatch()
  useFocusEffect(
    useCallback(() => {
      const interval = setInterval(() => {
        void dispatch(fetchEvents())
      }, 1000 * 10)

      return () => {
        clearInterval(interval)
      }
    }, []),
  )

  return (
    <EventsWrapper>
      <Text>123123</Text>
    </EventsWrapper>
  )
}

export default Events
