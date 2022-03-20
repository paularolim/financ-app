import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/global/theme';
import { Root } from './src/routes/Root';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>
);

export default App;
