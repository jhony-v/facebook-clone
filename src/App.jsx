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
      setData(JSON.parse(e).map(item => ({
        ...item,
        image : `https://source.unsplash.com/collection/${Math.floor(Math.random()*19072)}/1600x900`
      })));
    })
  },[url]);

  return (
      <ThemeProvider theme={defaultTheme}>
        <TabChat
          data={data} 
          filterOptions={{
            friends: 1,
            actives : 2,
          }}
          filterOptionsInitial={1} 
          onOptionSelected={ optionId => setUrl(e) }
          onSearch={ (data,value) => data.filter(item => item.title.includes(value)) }
        >
          <TabChat.Options>
            {(props) =>(
              <>
                <TabChat.Option optionId={props.friends} text="Friends" />
                <TabChat.Option optionId={props.actives} text="Active (52)" />
              </>
            )}
          </TabChat.Options>
            <TabChat.List>
            { (data,item) => (
              <TabChat.ListItem key={item.key}  style={item.style} image={data.image} text={data.title} />  
            )}
            </TabChat.List>
        </TabChat>
      </ThemeProvider>
  );
}

export default App;
