import React from 'react';
import { useUpdateAtom } from 'jotai/utils';
import { toggleTheme } from './stores/useTheme';
import AppContainer from './ui/AppContainer';

function App() {
  const updateTheme = useUpdateAtom(toggleTheme);
  return (
    <AppContainer>
      <button onClick={updateTheme}>change</button>
    </AppContainer>
  );
}

export default App;
