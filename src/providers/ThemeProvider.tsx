import * as React from 'react'
import {Theme, Themes, StyledComponentsThemeProvider} from '../theme'

const ThemeContext = React.createContext<{theme: Theme}>({
  theme: Object.values(Themes)[0],
})

export const ThemeProvider = (props: {children: React.ReactNode}) => {
  return (
    <ThemeContext.Provider value={{theme: Themes[0]}}>
      <StyledComponentsThemeProvider theme={Themes[0]}>
        {props.children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return React.useContext(ThemeContext)
}
