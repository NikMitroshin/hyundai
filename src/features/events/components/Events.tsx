import React, { useCallback } from 'react'

import styled from '@emotion/native'
import { useFocusEffect } from '@react-navigation/native'

import { DefaultTitle } from 'components/styled/Text'
import EventsList from 'features/events/components/EventsList'
import { fetchEvents } from 'features/events/store/actions/fetchEvents'
import useAppDispatch from 'hooks/useAppDispatch'

const EventsWrapper = styled.View``
const Title = styled(DefaultTitle)``

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
      <Title>GitHub events list</Title>
      <EventsList />
    </EventsWrapper>
  )
}

export default Events
