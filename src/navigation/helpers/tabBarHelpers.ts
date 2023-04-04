import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { Route } from '@react-navigation/routers'

import { TabRouteNames } from 'types'

export const getTitleByRoute = (route: Partial<Route<string>>): string => {
  const routeName = getFocusedRouteNameFromRoute(route)

  switch (routeName) {
    case TabRouteNames.EVENTS_SCREEN:
      return 'Events'
    case TabRouteNames.ACTIONS_SCREEN:
      return 'Actions'
    default:
      return 'Default Screen'
  }
}

export const getTabBarName = (name: TabRouteNames): string => {
  switch (name) {
    case TabRouteNames.EVENTS_SCREEN:
      return 'Events'
    case TabRouteNames.ACTIONS_SCREEN:
      return 'Actions'
    default:
      return ''
  }
}
