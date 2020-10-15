import React from 'react';
import { ThemeProvider } from 'styled-components';
import TabChat from './components/TabChat';
import defaultTheme from './theme/defaultTheme';

function App() {

  const data = [{
    text : "",
    image : "",
    option : "friends"
  }]


  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
          <TabChat>
            {/* <TabChat.RenderOptions initialId="friends">
              <TabChat.Option optionId="friends" text="Friends"/>
              <TabChat.Option optionId="online" text="Online"/>
            </TabChat.RenderOptions>
            <TabChat.RenderList data={data} /> */}
          </TabChat>
      </ThemeProvider>
    </div>
  );
}

export default App;
