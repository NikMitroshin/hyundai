import React from 'react'

import styled from '@emotion/native'
import { Linking } from 'react-native'
import FastImage from 'react-native-fast-image'

import { DefaultText } from 'components/styled/Text'
import { GitHubEventItem } from 'features/events/types'

const Wrapper = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }): string => theme.colors.background.main};
`
const Author = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`
const AuthorLogin = styled(DefaultText)`
  margin-left: 10px;
`
const AuthorAvatar = styled(FastImage)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`

const Event = styled.View``
const EventType = styled(DefaultText)``
const EventDate = styled(DefaultText)``

interface Props {
  item: GitHubEventItem
}

const EventItem: React.FC<Props> = ({ item }) => {
  const openLink = (url: string) => async (): Promise<void> => {
    await Linking.openURL(url)
  }

  return (
    <Wrapper>
      <Author onPress={openLink(item.authorUrl)}>
        <AuthorAvatar source={{ uri: item.authorAvatarUrl }} />
        <AuthorLogin>{item.authorLogin}</AuthorLogin>
      </Author>
      <Event>
        <EventType>{item.type}</EventType>
        <EventDate>{item.created_at}</EventDate>
      </Event>
    </Wrapper>
  )
}

export default EventItem
