import React from 'react'

import useAppSelector from 'hooks/useAppSelector'

const EventsList: React.FC = () => {
  const { eventsList } = useAppSelector((state) => state.events)

  if (eventsList.length) {
    // todo return empty
    return null
  }

  return null
}

export default EventsList
