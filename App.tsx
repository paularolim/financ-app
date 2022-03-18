import 'react-native-gesture-handler';
import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/global/theme';
import { Root } from './src/routes/Root';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>
);

export default App;
