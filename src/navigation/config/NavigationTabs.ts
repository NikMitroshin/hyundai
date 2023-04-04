import { ReactElement } from 'react'

import MainScreen from 'screens/MainScreen/MainScreen'
import SettingsScreen from 'screens/SettingsScreen/SettingsScreen'
import { TabRouteNames } from 'types'

interface Tab {
  name: TabRouteNames
  component: (props: any) => ReactElement | null
  isUnmountOnBlur: boolean
  initialParams?: { [key: string]: null }
}

const NAVIGATION_TABS: Tab[] = [
  {
    name: TabRouteNames.MAIN,
    component: MainScreen,
    isUnmountOnBlur: false,
  },
  {
    name: TabRouteNames.SETTINGS,
    component: SettingsScreen,
    isUnmountOnBlur: true,
  },
]

export default NAVIGATION_TABS
