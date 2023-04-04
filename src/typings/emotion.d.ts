import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: {
        main: string
      }
    }
    isSmall: boolean
  }
}
