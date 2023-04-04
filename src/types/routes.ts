import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export enum TabRouteNames {
  EVENTS_SCREEN = 'Events',
  ACTIONS_SCREEN = 'Actions',
}
export enum StackRouteNames {
  ROOT_TAB = 'ROOT_TAB',
}

export interface StackParamList {
  [StackRouteNames.ROOT_TAB]: undefined

  [key: string]: undefined
}

export interface StackNavProp<T extends keyof StackParamList> {
  navigation: StackNavigationProp<StackParamList, T>
  route: RouteProp<StackParamList, T>
}
