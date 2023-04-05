import React from 'react'

import styled from '@emotion/native'
import { FlatList, RefreshControl } from 'react-native'

import EventItem from 'features/eventsGH/components/EventItem'
import { GitHubEventItem } from 'features/eventsGH/types'
import useAppSelector from 'hooks/useAppSelector'

const Wrapper = styled.View`
  padding: 20px 0;
  background-color: ${({ theme }): string => theme.colors.background.light};
`

interface Props {
  onRefresh: () => void
  isRefreshing: boolean
}

const EventsList: React.FC<Props> = ({ onRefresh, isRefreshing }) => {
  const { eventsList } = useAppSelector((state) => state.events)

  const renderItem = ({ item }: { item: GitHubEventItem }): JSX.Element => <EventItem key={item.id} item={item} />

  if (!eventsList.length) {
    // todo return empty
    return null
  }

  return (
    <Wrapper>
      <FlatList
        data={eventsList}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  )
}

export default EventsList
