import React, { useCallback, useEffect, useState } from 'react'

import styled from '@emotion/native'
import { useFocusEffect } from '@react-navigation/native'

import { DefaultTitle } from 'components/styled/Text'
import EventsList from 'features/events/components/EventsList'
import { fetchEvents } from 'features/events/store/actions/fetchEvents'
import useAppDispatch from 'hooks/useAppDispatch'

const EventsWrapper = styled.View`
  padding: 20px 0;
  background-color: ${({ theme }): string => theme.colors.background.white};
`
const Title = styled(DefaultTitle)`
  margin-bottom: 20px;
`

const Events: React.FC = () => {
  const [isNeedTimer, setIsNeedTimer] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const dispatch = useAppDispatch()

  const getEvents = useCallback(() => {
    void dispatch(fetchEvents())
    setIsNeedTimer(true)
  }, [])

  useFocusEffect(
    useCallback(() => {
      getEvents()

      return (): void => {
        setIsNeedTimer(false)
      }
    }, []),
  )

  useEffect(() => {
    const interval =
      isNeedTimer && !isRefreshing
        ? setInterval(() => {
            getEvents()
          }, 1000 * 30)
        : null

    if (isRefreshing) {
      setIsRefreshing(false)
    }

    return () => {
      clearInterval(interval as NodeJS.Timer)
    }
  }, [isNeedTimer, isRefreshing])

  // refresh
  const onRefresh = (): void => {
    setIsRefreshing(true)
    getEvents()
  }

  return (
    <EventsWrapper>
      <Title>GitHub events list</Title>
      <EventsList onRefresh={onRefresh} isRefreshing={isRefreshing} />
    </EventsWrapper>
  )
}

export default Events
