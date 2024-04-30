import 'react-native-gesture-handler';
import * as React from 'react';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

const IndexApp = () => {
  return (
    <>
      <App />
    </>
  );
};

AppRegistry.registerComponent(appName, () => App);
