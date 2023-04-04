import React from 'react'

import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { getTabBarIcon } from 'navigation/components/TabBarIcons'
import NAVIGATION_TABS from 'navigation/config/NavigationTabs'
import { getTabBarName, getTitleByRoute } from 'navigation/helpers/tabBarHelpers'
import { StackNavProp, StackRouteNames, TabRouteNames } from 'types'

const Tab = createBottomTabNavigator()

const TabNavigator = ({ route }: StackNavProp<StackRouteNames.ROOT_TAB>): JSX.Element => (
  <Tab.Navigator
    initialRouteName={TabRouteNames.MAIN}
    screenOptions={({ route: TabRoutes }): BottomTabNavigationOptions => ({
      headerTitle: getTitleByRoute(route),
      tabBarIcon: ({ focused }) => getTabBarIcon({ focused, name: TabRoutes.name }),
    })}
  >
    {NAVIGATION_TABS.map((tab) => (
      <Tab.Screen
        {...tab}
        key={tab.name}
        name={tab.name}
        component={tab.component}
        options={{
          unmountOnBlur: tab.isUnmountOnBlur,
          title: getTabBarName(tab.name),
          headerTitle: getTabBarName(tab.name),
        }}
      />
    ))}
  </Tab.Navigator>
)

export default TabNavigator
