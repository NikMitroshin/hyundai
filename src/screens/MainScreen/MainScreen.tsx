import React from 'react'

import styled from '@emotion/native'

import { StackNavProp, TabRouteNames } from 'types'

const Crr = styled.Text`
  color: ${({ theme }): string => theme.colors.primary.main};
`
const MainScreen: React.FC<StackNavProp<TabRouteNames.MAIN>> = () => <Crr>MainScreen</Crr>

export default MainScreen
