import React from 'react';
import { ThemeProvider } from 'styled-components';
import TabChat from './components/TabChat';
import defaultTheme from './theme/defaultTheme';

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
      <TabChat/>
      </ThemeProvider>
    </div>
  );
}

export default App;
