import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import TabChat from "./components/TabChat";
import defaultTheme from "./theme/defaultTheme";

function App() {
  
  const e = "https://jsonplaceholder.typicode.com/posts/";

  const [ data , setData ] = React.useState([]);
  const [ url , setUrl ] = React.useState(e);
  useEffect(() => {
    fetch(url).then(e=>e.text()).then(e => {
      setData(JSON.parse(e));
    })
  },[url]);

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <TabChat
          data={data} 
          onOptionSelected={optionId => {
            setUrl(e);
          }}
          filterOptionsInitial={1} 
          filterOptionsSearch={["title","body"]}
          filterOptions={{
            completed: 1,
            notCompleted : 2,
          }}
        >
          <TabChat.RenderOptions>
            {(props) =>(
              <>
                <TabChat.Option optionId={props.completed} text="Completed" />
                <TabChat.Option optionId={props.notCompleted} text="Not completed" />
              </>
            )}
          </TabChat.RenderOptions>
            <TabChat.RenderList>
            {
              (item,index) => <TabChat.Item key={index} image={item.thumbnailUrl} text={item.title} /> 
            }
            </TabChat.RenderList>
        </TabChat>
      </ThemeProvider>
    </div>
  );
}

export default App;
