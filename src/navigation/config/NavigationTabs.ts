import { ReactElement } from 'react'

import ActionsScreen from 'screens/ActionsScreen/ActionsScreen'
import EventsScreen from 'screens/EvestsScreen/EventsScreen'
import { TabRouteNames } from 'types'

interface Tab {
  name: TabRouteNames
  component: (props: any) => ReactElement | null
  isUnmountOnBlur: boolean
  initialParams?: { [key: string]: null }
}

const NAVIGATION_TABS: Tab[] = [
  {
    name: TabRouteNames.EVENTS_SCREEN,
    component: EventsScreen,
    isUnmountOnBlur: false,
  },
  {
    name: TabRouteNames.ACTIONS_SCREEN,
    component: ActionsScreen,
    isUnmountOnBlur: true,
  },
]

export default NAVIGATION_TABS
