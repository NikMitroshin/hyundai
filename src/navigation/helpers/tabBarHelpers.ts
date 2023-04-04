import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { Route } from '@react-navigation/routers'

import { TabRouteNames } from 'types'

export const getTitleByRoute = (route: Partial<Route<string>>): string => {
  const routeName = getFocusedRouteNameFromRoute(route)

  switch (routeName) {
    case TabRouteNames.MAIN:
      return 'Main'
    case TabRouteNames.SETTINGS:
      return 'Settings'
    default:
      return 'Default Screen'
  }
}

export const getTabBarName = (name: TabRouteNames): string => {
  switch (name) {
    case TabRouteNames.MAIN:
      return 'Main'
    case TabRouteNames.SETTINGS:
      return 'Settings'
    default:
      return ''
  }
}
