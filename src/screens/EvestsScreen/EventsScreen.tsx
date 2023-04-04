import React from 'react'

import styled from '@emotion/native'

import { StackNavProp, TabRouteNames } from 'types'

const Crr = styled.Text`
  color: ${({ theme }): string => theme.colors.primary.main};
`
const EventsScreen: React.FC<StackNavProp<TabRouteNames.EVENTS_SCREEN>> = () => <Crr>MainScreen</Crr>

export default EventsScreen
