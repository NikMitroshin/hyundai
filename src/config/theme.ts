import { Theme } from '@emotion/react'
import { Dimensions } from 'react-native'

const theme: Theme = {
  colors: {
    primary: {
      main: '#0350f5',
    },
  },
  isSmall: Dimensions.get('window').height <= 667,
}

export default theme
