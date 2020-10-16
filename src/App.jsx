import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import TabChat from "./components/ChatTab";
import defaultTheme from "./theme/defaultTheme";

function App() {
  
  const e = "https://jsonplaceholder.typicode.com/todos/";

  const [ data , setData ] = React.useState([]);
  const [ url , setUrl ] = React.useState(e);
  useEffect(() => {
    fetch(url).then(e=>e.text()).then(e => {
      setData(JSON.parse(e));
    })
  },[url]);

  return (
      <ThemeProvider theme={defaultTheme}>
        <TabChat
          filterOptionsInitial={1} 
          filterOptions={{
            completed: 1,
            notCompleted : 2,
          }}
          data={data} 
          onOptionSelected={ optionId => setUrl(e) }
          onSearch={ (data,value) => data.filter(item => item.title.includes(value)) }
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
            { (item,index) => (
              <TabChat.Item 
                key={index} 
                text={item.title} />  
            )}
            </TabChat.RenderList>
        </TabChat>
      </ThemeProvider>
  );
}

export default App;
