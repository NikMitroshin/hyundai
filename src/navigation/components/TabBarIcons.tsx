import React from 'react'

import HistoryIcon from 'navigation/icons/HistoryIcon'
import WalletsIcon from 'navigation/icons/WalletsIcon'
import { TabRouteNames } from 'types'

interface Params {
  focused: boolean
  name: string
}

export const getTabBarIcon = ({ focused, name }: Params): JSX.Element | undefined => {
  switch (name) {
    case TabRouteNames.EVENTS_SCREEN:
      return <HistoryIcon focused={focused} />
    case TabRouteNames.ACTIONS_SCREEN:
      return <WalletsIcon focused={focused} />
    default:
      return undefined
  }
}
