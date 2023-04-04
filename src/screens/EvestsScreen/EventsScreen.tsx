import React from 'react'

import Events from 'features/events/components/Events'
import { StackNavProp, TabRouteNames } from 'types'

const EventsScreen: React.FC<StackNavProp<TabRouteNames.EVENTS_SCREEN>> = () => <Events />

export default EventsScreen
