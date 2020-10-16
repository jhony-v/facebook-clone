import React from "react";
import { ThemeProvider } from "styled-components";
import TabChat from "./components/TabChat";
import defaultTheme from "./theme/defaultTheme";

function App() {
  
  const data = Array(10).fill(0).map((e,i) => ({
    image: `https://source.unsplash.com/collection/${Math.floor(Math.random()*1000)}/1600x900`,
    text: "Mark Zuckerberk Facebook"+i,
    category : i % 2 === 0 ? "friends" : "online",
  }))

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <TabChat
          data={data} filterOptionsInitial="friends" filterOptions={{
            friends: "friends",
            online: "online",
          }}
        >
          <TabChat.RenderOptions>
            {(props) =>(
              <>
                <TabChat.Option optionId={props.friends} text="Friends" />
                <TabChat.Option optionId={props.online} text="Online" />
              </>
            )}
          </TabChat.RenderOptions>
          <TabChat.RenderList> { (item, index) => <TabChat.Item {...item} key={index} /> }</TabChat.RenderList>
        </TabChat>
      </ThemeProvider>
    </div>
  );
}

export default App;
