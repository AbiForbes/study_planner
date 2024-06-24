import 'react-native-gesture-handler'
import * as React from 'react'

import {AppRegistry} from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'
import {ThemeProvider} from './src/providers/ThemeProvider'

const IndexApp = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

AppRegistry.registerComponent(appName, () => App)
