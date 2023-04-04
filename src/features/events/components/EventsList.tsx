import React from 'react'

import { FlatList, RefreshControl, Text } from 'react-native'

import { GitHubEventItem } from 'features/events/types'
import useAppSelector from 'hooks/useAppSelector'

interface Props {
  onRefresh: () => void
  isRefreshing: boolean
}

const EventsList: React.FC<Props> = ({ onRefresh, isRefreshing }) => {
  const { eventsList } = useAppSelector((state) => state.events)

  const renderItem = ({ item }: { item: GitHubEventItem }): JSX.Element => <Text>{item.authorLogin}</Text>

  if (!eventsList.length) {
    // todo return empty
    return null
  }

  return (
    <FlatList
      data={eventsList}
      renderItem={renderItem}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default EventsList
